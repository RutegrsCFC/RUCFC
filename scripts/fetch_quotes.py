"""Fetch quotes for the homepage ticker and write quotes.json.

Run by the GitHub Action before each Pages deploy. Stdlib only.
Primary source: Tencent's public quote feed (US, HK and A-shares in one call).
Fallback: Yahoo's batch spark endpoint. If a symbol still fails, the last
published value is reused so the banner never loses an item.
"""
import json
import os
import sys
import time
import urllib.request
from concurrent.futures import ThreadPoolExecutor

# display symbol, Tencent code, Yahoo symbol, English name, Chinese name, currency, kind
# kind: "i" = index (shown without a currency sign, with a region badge), "s" = stock
# Order alternates US / China so the band reads as one cross-border market.
SYMBOLS = [
    # Indices
    ("SPX", "usINX", "^GSPC", "S&P 500", "标普 500", "US", "i"),
    ("000001.SS", "sh000001", "000001.SS", "SSE Composite", "上证指数", "CN", "i"),
    ("IXIC", "usIXIC", "^IXIC", "Nasdaq", "纳斯达克", "US", "i"),
    ("HSI", "hkHSI", "^HSI", "Hang Seng", "恒生指数", "HK", "i"),
    ("DJI", "usDJI", "^DJI", "Dow Jones", "道琼斯", "US", "i"),
    ("000300.SS", "sh000300", "000300.SS", "CSI 300", "沪深 300", "CN", "i"),
    ("399001.SZ", "sz399001", "399001.SZ", "SZSE Component", "深证成指", "CN", "i"),
    ("HSTECH", "hkHSTECH", "HSTECH.HK", "Hang Seng Tech", "恒生科技", "HK", "i"),
    ("399006.SZ", "sz399006", "399006.SZ", "ChiNext", "创业板指", "CN", "i"),
    ("000688.SS", "sh000688", "000688.SS", "STAR 50", "科创 50", "CN", "i"),
    # Companies
    ("NVDA", "usNVDA", "NVDA", "NVIDIA", "英伟达", "USD", "s"),
    ("0700.HK", "hk00700", "0700.HK", "Tencent", "腾讯控股", "HKD", "s"),
    ("AAPL", "usAAPL", "AAPL", "Apple", "苹果", "USD", "s"),
    ("BABA", "usBABA", "BABA", "Alibaba", "阿里巴巴", "USD", "s"),
    ("MSFT", "usMSFT", "MSFT", "Microsoft", "微软", "USD", "s"),
    ("600519.SS", "sh600519", "600519.SS", "Kweichow Moutai", "贵州茅台", "CNY", "s"),
    ("GOOGL", "usGOOGL", "GOOGL", "Alphabet", "谷歌", "USD", "s"),
    ("300750.SZ", "sz300750", "300750.SZ", "CATL", "宁德时代", "CNY", "s"),
    ("AMZN", "usAMZN", "AMZN", "Amazon", "亚马逊", "USD", "s"),
    ("1211.HK", "hk01211", "1211.HK", "BYD", "比亚迪", "HKD", "s"),
    ("META", "usMETA", "META", "Meta", "Meta", "USD", "s"),
    ("1810.HK", "hk01810", "1810.HK", "Xiaomi", "小米集团", "HKD", "s"),
    ("AVGO", "usAVGO", "AVGO", "Broadcom", "博通", "USD", "s"),
    ("3690.HK", "hk03690", "3690.HK", "Meituan", "美团", "HKD", "s"),
    ("TSM", "usTSM", "TSM", "TSMC", "台积电", "USD", "s"),
    ("PDD", "usPDD", "PDD", "PDD Holdings", "拼多多", "USD", "s"),
    ("TSLA", "usTSLA", "TSLA", "Tesla", "特斯拉", "USD", "s"),
    ("JD", "usJD", "JD", "JD.com", "京东", "USD", "s"),
    ("AMD", "usAMD", "AMD", "AMD", "超威半导体", "USD", "s"),
    ("BIDU", "usBIDU", "BIDU", "Baidu", "百度", "USD", "s"),
    ("JPM", "usJPM", "JPM", "JPMorgan", "摩根大通", "USD", "s"),
    ("601318.SS", "sh601318", "601318.SS", "Ping An", "中国平安", "CNY", "s"),
    ("GS", "usGS", "GS", "Goldman Sachs", "高盛", "USD", "s"),
    ("600036.SS", "sh600036", "600036.SS", "China Merchants Bank", "招商银行", "CNY", "s"),
    ("MS", "usMS", "MS", "Morgan Stanley", "摩根士丹利", "USD", "s"),
    ("601398.SS", "sh601398", "601398.SS", "ICBC", "工商银行", "CNY", "s"),
    ("BRK.B", "usBRK.B", "BRK-B", "Berkshire Hathaway", "伯克希尔", "USD", "s"),
    ("0941.HK", "hk00941", "0941.HK", "China Mobile", "中国移动", "HKD", "s"),
    ("NFLX", "usNFLX", "NFLX", "Netflix", "奈飞", "USD", "s"),
    ("NTES", "usNTES", "NTES", "NetEase", "网易", "USD", "s"),
    ("V", "usV", "V", "Visa", "Visa", "USD", "s"),
]

UA = {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/126 Safari/537.36"}


def get(url, timeout=20):
    with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=timeout) as r:
        return r.read()


def fetch_tencent():
    """({display symbol: {price, prev}}, {display symbol: K-line code}) from one request to qt.gtimg.cn."""
    out, kline = {}, {}
    code_to_sym = {t: s for s, t, *_ in SYMBOLS}
    try:
        raw = get("https://qt.gtimg.cn/q=" + ",".join(code_to_sym)).decode("gbk", "replace")
    except Exception as e:  # noqa: BLE001
        print(f"warn: tencent: {e}", file=sys.stderr)
        return out, kline
    for line in raw.split(";"):
        line = line.strip()
        if "=" not in line:
            continue
        key, val = line.split("=", 1)
        code = key.strip()[2:]  # drop leading "v_"
        f = val.strip('"').split("~")
        try:
            price, prev = float(f[3]), float(f[4])
            if price > 0 and prev > 0 and code in code_to_sym:
                out[code_to_sym[code]] = {"price": round(price, 2), "prev": round(prev, 2)}
                kline[code_to_sym[code]] = ("us" + f[2]) if code.startswith("us") else code
        except (IndexError, ValueError):
            pass
    return out, kline


def fetch_yahoo(symbols):
    """Batch fallback for whatever Tencent missed."""
    out = {}
    if not symbols:
        return out
    y_to_sym = {y: s for s, _, y, *_ in SYMBOLS if s in symbols}
    for host in ("query1", "query2"):
        try:
            d = json.loads(get(f"https://{host}.finance.yahoo.com/v7/finance/spark?symbols={','.join(y_to_sym)}&range=1d&interval=1d"))
            for r in d["spark"]["result"]:
                try:
                    m = r["response"][0]["meta"]
                    prev = m.get("chartPreviousClose") or m.get("previousClose")
                    out[y_to_sym[r["symbol"]]] = {"price": round(float(m["regularMarketPrice"]), 2), "prev": round(float(prev), 2)}
                except Exception:  # noqa: BLE001
                    pass
            return out
        except Exception as e:  # noqa: BLE001
            print(f"warn: yahoo via {host}: {e}", file=sys.stderr)
            time.sleep(3)
    return out


def fetch_sparks(kline_codes):
    """{display symbol: last 20 daily closes} from Tencent's K-line feed.

    kline_codes maps display symbol -> Tencent K-line code. US codes need the
    exchange suffix (AAPL.OQ, JPM.N, .INX), which the quote call reports.
    """
    def one(item):
        sym, code = item
        path = "usfqkline" if code.startswith("us") else "fqkline"
        try:
            d = json.loads(get(f"https://web.ifzq.gtimg.cn/appstock/app/{path}/get?param={code},day,,,20,qfq", 8))
            k = next(iter(d["data"].values()))
            rows = k.get("qfqday") or k.get("day") or []
            pts = [round(float(r[2]), 3) for r in rows if len(r) > 2]
            return sym, pts if len(pts) >= 4 else None
        except Exception as e:  # noqa: BLE001
            print(f"warn: kline {code}: {e}", file=sys.stderr)
            return sym, None

    out = {}
    with ThreadPoolExecutor(max_workers=8) as pool:
        for sym, pts in pool.map(one, kline_codes.items()):
            if pts:
                out[sym] = pts
    return out


def load_previous(url):
    if not url:
        return {}
    try:
        return {q["s"]: q for q in json.loads(get(url, 15)).get("quotes", [])}
    except Exception:  # noqa: BLE001
        return {}


def main():
    out_path = sys.argv[1] if len(sys.argv) > 1 else "quotes.json"
    prev_url = sys.argv[2] if len(sys.argv) > 2 else ""

    got, kline_codes = fetch_tencent()
    missing = [s for s, *_ in SYMBOLS if s not in got]
    got.update(fetch_yahoo(missing))
    previous = load_previous(prev_url)
    sparks = fetch_sparks(kline_codes)

    quotes, fresh = [], 0
    logo_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "assets", "tickers")
    for sym, _, _, en, zh, cur, kind in SYMBOLS:
        q = got.get(sym)
        if q:
            fresh += 1
        elif sym in previous:
            q = {"price": previous[sym]["price"], "prev": previous[sym]["prev"]}
        else:
            continue
        item = {"s": sym, "en": en, "zh": zh, "cur": cur, "k": kind, **q}
        sp = sparks.get(sym) or (previous.get(sym) or {}).get("sp")
        if sp:
            item["sp"] = sp
        if kind == "s" and os.path.exists(os.path.join(logo_dir, sym + ".png")):
            item["lg"] = 1
        quotes.append(item)

    with open(out_path, "w") as fh:
        json.dump({"updated": int(time.time()), "fresh": fresh, "quotes": quotes}, fh, ensure_ascii=False, separators=(",", ":"))
    print(f"wrote {len(quotes)} quotes ({fresh} fresh) -> {out_path}")
    if not quotes:
        sys.exit(1)


if __name__ == "__main__":
    main()
