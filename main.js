/* RCFC — preview site behaviour: i18n, nav state, mobile menu, reveal on scroll. */
(function () {
  "use strict";

  var STORAGE_KEY = "rucfc-lang";

  var DICT = {
    en: {
      "meta.title": "RCFC — Rutgers Chinese Finance Club",
      "a11y.skip": "Skip to content",
      "a11y.home": "RCFC — home",
      "a11y.logo": "RCFC logo",
      "a11y.seal": "RCFC circular wordmark",
      "a11y.primary": "Primary",
      "a11y.lang": "Language",
      "a11y.menu": "Open menu",
      "a11y.menuClose": "Close menu",
      "a11y.channels": "Club channels",

      "brand.sub": "Rutgers Chinese Finance Club",
      "nav.club": "The Club",
      "nav.programs": "Programs",
      "nav.standard": "Events",
      "nav.leadership": "Leadership",
      "nav.membership": "Membership",

      "hero.eyebrow": "Founding Cohort · Fall 2026",
      "hero.title": "Rigour. Conviction. Perspective.",
      "hero.cta": "Membership Enquiries",
      "hero.cta2": "Recent Events",
      "hero.seal": "Rutgers University–New Brunswick",
      "hero.t1": "Bridging",
      "hero.t2": "Rutgers",
      "hero.t3": "and China.",
      "ticker.label": "Market prices",
      "ticker.live": "Markets",
      "club.statement": "A China lens on global finance.",
      "club.capNY": "New York",
      "club.capSH": "Shanghai",
      "programs.kicker": "Three practice areas. One standard.",
      "footer.data": "Market data may be delayed. For reference only.",


      "club.title": "The Club",
      "club.p1": "The Rutgers Chinese Finance Club (RCFC) is a student organization at Rutgers University–New Brunswick. We bridge Western finance and Chinese markets, giving Rutgers students practical insight into China's financial systems and tech sector.",
      "club.p2": "RCFC is bilingual and open to every Rutgers student. No finance background is required.",
      "club.quote": "A cross-border perspective on U.S. and Chinese capital markets.",

      "programs.title": "Programs",
      "programs.w0": "Programs.",
      "programs.w1": "Research.",
      "programs.w2": "Credentials.",
      "programs.w3": "Sessions.",
      "programs.s1": "Research",
      "programs.s2": "Credentials",
      "programs.s3": "Sessions",
      "programs.t1": "Equity Research",
      "programs.d1": "Sector initiations and single-name investment theses built on sell-side methodology: industry mapping, supply-chain channel checks, financial modelling, and DCF and trading-comparables valuation.",
      "programs.t2": "Professional Credentialing",
      "programs.d2": "Structured preparation for Bloomberg Market Concepts (BMC) and ESG certifications, alongside Bloomberg Terminal workflows and AI-assisted data analysis.",
      "programs.t3": "Closed-Door Sessions",
      "programs.d3": "Off-the-record discussions with industry practitioners, supported by a peer network held to the same professional standard.",


      "leadership.title": "Leadership",
      "events.title": "Events",
      "events.intro": "Recent gatherings of the founding cohort.",
      "events.e1.t": "Kickoff Meeting",
      "events.e1.d": "The first general meeting: introducing the club, the executive board, and the semester plan.",
      "events.e2.t": "Alumni Insights",
      "events.e2.d": "A Rutgers Mathematics and Statistics alumnus working in bank data shared his path into industry.",
      "events.e3.t": "After the Talk",
      "eboard.president": "President",
      "eboard.president.name": "Lucas (ZhiYao) Yan",
      "hero.lead": "Our mission is to give Rutgers students practical insight into China's financial systems and tech sector. Our vision is to prepare them for global finance through cross-border education and practice.",
      "eboard.title": "The founding executive board.",
      "eboard.vp": "External Vice President",
      "eboard.vp.name": "Harry (JianXia) Sun",
      "eboard.vp2": "Internal Vice President",
      "eboard.vp2.name": "Nihal Singh",
      "eboard.cto": "Technology Lead",
      "eboard.cto.name": "Bowen Rui",
      "eboard.secretary": "Secretary",
      "eboard.secretary.name": "Ethan (SanMu) Zhang",
      "eboard.treasurer": "Treasurer",
      "eboard.treasurer.name": "JiaYin Wang",
      "eboard.outreach": "External Media & Outreach",
      "eboard.outreach.name": "Jacky Wang",
      "eboard.outreach2": "Internal Media & Outreach",
      "eboard.outreach2.name": "Shobhit Mishra",

      "membership.title": "Membership Enquiries",
      "membership.line": "Students who share our standards are welcome to request further information.",
      "membership.cta": "Request Information",

      "apply.metaTitle": "Membership Enquiries — RCFC",
      "apply.back": "Back to site",
      "apply.name": "Name",
      "apply.email": "Scarletmail",
      "apply.why": "Why would you like to join?",
      "apply.why1": "Learn finance",
      "apply.why2": "Make connections",
      "apply.why3": "Advance my career",
      "apply.whyOther": "Other",
      "apply.otherPh": "Tell us more",
      "apply.otherLabel": "Other reason",
      "apply.note": "What draws you to the club, and what do you hope to gain from it?",
      "apply.optional": "Optional",
      "apply.errName": "Please enter your name.",
      "apply.errEmail": "Please enter a valid email address.",
      "apply.errOther": "Please tell us your reason.",
      "apply.submit": "Submit Enquiry",
      "apply.sending": "Sending…",
      "apply.failed": "Your enquiry could not be sent. Please check your connection and try again, or use the Google Form below.",
      "apply.alt": "Or open the Google Form",
      "apply.doneTitle": "Thank you. Your enquiry has been submitted.",
      "apply.doneBody": "We will be in touch at your Scarletmail address.",

      "footer.uni": "Rutgers University–New Brunswick",
      "footer.follow": "Official Channels",
      "footer.disclaimer": "An independent student organization at Rutgers University."
    },

    zh: {
      "meta.title": "RCFC — 罗格斯华人金融俱乐部",
      "a11y.skip": "跳到正文",
      "a11y.home": "RCFC — 首页",
      "a11y.logo": "RCFC 标志",
      "a11y.seal": "RCFC 圆形标志",
      "a11y.primary": "主导航",
      "a11y.lang": "语言",
      "a11y.menu": "打开菜单",
      "a11y.menuClose": "关闭菜单",
      "a11y.channels": "俱乐部渠道",

      "brand.sub": "罗格斯华人金融俱乐部",
      "nav.club": "关于我们",
      "nav.programs": "核心项目",
      "nav.standard": "活动",
      "nav.leadership": "团队",
      "nav.membership": "入会",

      "hero.eyebrow": "创始届 · 2026 年秋季",
      "hero.title": "严谨。定见。视野。",
      "hero.cta": "入会咨询",
      "hero.cta2": "近期活动",
      "hero.seal": "罗格斯大学新布朗斯维克校区",
      "hero.t1": "连接",
      "hero.t2": "罗格斯",
      "hero.t3": "与中国。",
      "ticker.label": "股票行情",
      "ticker.live": "行情",
      "club.statement": "用中国视角，看全球金融。",
      "club.capNY": "纽约",
      "club.capSH": "上海",
      "programs.kicker": "我们专注三件事。",
      "footer.data": "行情数据或有延迟，仅供参考。",


      "club.title": "关于我们",
      "club.p1": "罗格斯华人金融俱乐部（RCFC）是罗格斯大学新布朗斯维克校区的学生组织，致力于连接西方金融与中国市场，帮助同学切实了解中国的金融体系与科技产业。",
      "club.p2": "俱乐部中英双语，面向全体罗格斯学生开放，无需金融背景。",
      "club.quote": "立足中美两地资本市场的跨境视角。",

      "programs.title": "核心项目",
      "programs.s1": "研究",
      "programs.s2": "认证",
      "programs.s3": "研讨",
      "programs.t1": "行业与个股研究",
      "programs.d1": "依托卖方研究方法论，撰写行业首次覆盖与个股投资逻辑报告：产业链梳理、渠道调研、财务建模，以及 DCF 与可比公司估值。",
      "programs.t2": "专业资质认证",
      "programs.d2": "系统备考 Bloomberg Market Concepts（BMC）与 ESG 认证，配合 Bloomberg 终端实操及 AI 辅助的数据分析流程。",
      "programs.t3": "闭门研讨",
      "programs.d3": "与业内从业者开展非公开闭门研讨，并依托以专业标准为共识的同侪网络。",


      "leadership.title": "团队",
      "events.title": "活动",
      "events.intro": "创始届近期活动回顾。",
      "events.e1.t": "Kickoff 全员大会",
      "events.e1.d": "首次全员大会：介绍俱乐部、执行委员会与本学期规划。",
      "events.e2.t": "校友分享会",
      "events.e2.d": "一位数学与统计专业的罗格斯校友，分享他进入银行数据领域的职业路径。",
      "events.e3.t": "分享会合影",
      "eboard.president": "社长",
      "eboard.president.name": "Lucas Yan（ZhiYao）",
      "hero.lead": "我们的使命是帮助罗格斯学生切实了解中国的金融体系与科技产业；我们的愿景是通过跨境教育与实践，助力同学走向全球金融职业。",
      "eboard.title": "创始届执行委员会。",
      "eboard.vp": "外务副社长",
      "eboard.vp.name": "Harry Sun（JianXia）",
      "eboard.vp2": "内务副社长",
      "eboard.vp2.name": "Nihal Singh",
      "eboard.cto": "技术负责人",
      "eboard.cto.name": "Bowen Rui",
      "eboard.secretary": "秘书长",
      "eboard.secretary.name": "Ethan Zhang（SanMu）",
      "eboard.treasurer": "财务",
      "eboard.treasurer.name": "JiaYin Wang",
      "eboard.outreach": "外务媒体与外联",
      "eboard.outreach.name": "Jacky Wang",
      "eboard.outreach2": "内务媒体与外联",
      "eboard.outreach2.name": "Shobhit Mishra",

      "membership.title": "入会咨询",
      "membership.line": "认同本会准则的同学，欢迎索取入会相关信息。",
      "membership.cta": "索取信息",

      "apply.metaTitle": "入会咨询 — RCFC",
      "apply.back": "返回主页",
      "apply.name": "姓名",
      "apply.email": "罗格斯邮箱（Scarletmail）",
      "apply.why": "为什么想加入本会？",
      "apply.why1": "学习金融知识",
      "apply.why2": "结交各路朋友",
      "apply.why3": "赋能职业道路",
      "apply.whyOther": "其他",
      "apply.otherPh": "请简单说明",
      "apply.otherLabel": "其他原因",
      "apply.note": "本会有什么吸引你？你希望在这里获得什么？",
      "apply.optional": "选填",
      "apply.errName": "请填写姓名。",
      "apply.errEmail": "请填写有效的邮箱地址。",
      "apply.errOther": "请填写你的原因。",
      "apply.submit": "提交申请",
      "apply.sending": "提交中…",
      "apply.failed": "提交失败。请检查网络后重试，或使用下方的 Google 表单。",
      "apply.alt": "或打开 Google 表单填写",
      "apply.doneTitle": "感谢，你的申请已提交。",
      "apply.doneBody": "我们会通过你的 Scarletmail 邮箱与你联系。",

      "footer.uni": "罗格斯大学新布朗斯维克校区",
      "footer.follow": "官方渠道",
      "footer.disclaimer": "罗格斯大学独立学生组织。"
    }
  };

  var root = document.documentElement;

  /* Motion tier, decided once and shared by every animated part of the page. */
  var REDUCE = !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  var MOTION = (function () {
    if (REDUCE || !("IntersectionObserver" in window)) return { tier: "off", amp: 0, tau: 0 };
    var coarse = window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 760;
    var nav_ = navigator, conn = nav_.connection || {};
    var lowPower = (nav_.hardwareConcurrency && nav_.hardwareConcurrency <= 4) ||
      (nav_.deviceMemory && nav_.deviceMemory <= 4) || conn.saveData === true;
    if (coarse || lowPower) return { tier: "lite", amp: lowPower && coarse ? 0.4 : 0.55, tau: 0, lowPower: !!lowPower };
    return { tier: "full", amp: 1, tau: 0.11, lowPower: false };
  })();
  root.setAttribute("data-motion", MOTION.tier);
  root.style.setProperty("--amp", MOTION.amp);
  var nav = document.querySelector(".nav");
  var toggle = document.querySelector(".menu-toggle");
  var menu = document.getElementById("site-menu");
  var currentLang = "en";

  /* ---------- i18n ---------- */
  function readLang() {
    try {
      var v = window.localStorage.getItem(STORAGE_KEY);
      return v === "zh" || v === "en" ? v : "en";
    } catch (e) {
      return "en";
    }
  }

  function saveLang(lang) {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) { /* storage unavailable — ignore */ }
  }

  function t(key) {
    var table = DICT[currentLang] || DICT.en;
    return Object.prototype.hasOwnProperty.call(table, key) ? table[key] : DICT.en[key];
  }

  function applyLang(lang) {
    currentLang = DICT[lang] ? lang : "en";
    root.setAttribute("lang", currentLang === "zh" ? "zh-Hans" : "en");

    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var val = t(nodes[i].getAttribute("data-i18n"));
      if (nodes[i].tagName === "TITLE") {
        if (typeof val === "string") nodes[i].textContent = val;
        continue;
      }
      // Both languages share one grid cell, so the box keeps the same size whichever is shown.
      var stack = nodes[i].firstElementChild;
      if (!stack || !stack.classList.contains("i18n")) {
        var key = nodes[i].getAttribute("data-i18n");
        stack = document.createElement("span");
        stack.className = "i18n";
        ["en", "zh"].forEach(function (l) {
          var s = document.createElement("span");
          s.setAttribute("lang", l === "zh" ? "zh-Hans" : "en");
          s.setAttribute("data-l", l);
          var v = Object.prototype.hasOwnProperty.call(DICT[l], key) ? DICT[l][key] : DICT.en[key];
          s.textContent = typeof v === "string" ? v : nodes[i].textContent;
          stack.appendChild(s);
        });
        // Single-line labels (inline, or items in a flex row) only show the active language;
        // reserving the other language's width there leaves visible gaps.
        var host = nodes[i];
        if (/^inline/.test(getComputedStyle(host).display) || (!/^(P|H\d)$/.test(host.tagName) && /flex/.test(getComputedStyle(host.parentElement).display))) {
          stack.classList.add("i18n--inline");
        }
        nodes[i].textContent = "";
        nodes[i].appendChild(stack);
      }
      for (var c = 0; c < stack.children.length; c++) {
        var on = stack.children[c].getAttribute("data-l") === currentLang;
        stack.children[c].classList.toggle("is-off", !on);
        if (on) stack.children[c].removeAttribute("aria-hidden"); else stack.children[c].setAttribute("aria-hidden", "true");
      }
    }

    var attrNodes = document.querySelectorAll("[data-i18n-attr]");
    for (var j = 0; j < attrNodes.length; j++) {
      var pairs = attrNodes[j].getAttribute("data-i18n-attr").split(";");
      for (var k = 0; k < pairs.length; k++) {
        var parts = pairs[k].split(":");
        if (parts.length !== 2) continue;
        var attrVal = t(parts[1].trim());
        if (typeof attrVal === "string") attrNodes[j].setAttribute(parts[0].trim(), attrVal);
      }
    }

    var btns = document.querySelectorAll(".lang__btn");
    for (var b = 0; b < btns.length; b++) {
      btns[b].setAttribute("aria-pressed", btns[b].getAttribute("data-lang") === currentLang ? "true" : "false");
    }
    syncMenuLabel();
    renderTickerNames();
    if (track) setSpeed();
  }

  /* ---------- Live ticker ----------
     quotes.json is rebuilt by the GitHub Action every few minutes. The page
     polls it and tweens each price from its old value to the new one. */
  var ticker = document.getElementById("ticker");
  var track = document.getElementById("ticker-track");
  var POLL_MS = 60000;
  var TWEEN_MS = 1600;
  var CUR = { USD: "$", HKD: "HK$", CNY: "¥" };
  var quotes = {};   // symbol -> { price, prev, cur, en, zh, shown }
  var order = [];

  function fmt(n) {
    return n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  function pct(price, prev) {
    return prev ? (price - prev) / prev * 100 : 0;
  }
  function paint(sym, price) {
    var q = quotes[sym];
    var p = pct(price, q.prev);
    var sign = p > 0.005 ? "+" : p < -0.005 ? "−" : "";
    var cls = p > 0.005 ? "is-up" : p < -0.005 ? "is-down" : "is-flat";
    var els = track.querySelectorAll('[data-s="' + sym + '"]');
    for (var i = 0; i < els.length; i++) {
      els[i].querySelector(".tk__px").textContent = (CUR[q.cur] || "") + fmt(price);
      var c = els[i].querySelector(".tk__chg");
      c.textContent = sign + Math.abs(p).toFixed(2) + "%";
      c.className = "tk__chg " + cls;
    }
  }
  function tween(sym, from, to) {
    var start = null;
    var q = quotes[sym];
    var els = track.querySelectorAll('[data-s="' + sym + '"]');
    var dir = to > from ? "flash-up" : "flash-down";
    for (var i = 0; i < els.length; i++) {
      els[i].classList.remove("flash-up", "flash-down");
      void els[i].offsetWidth;
      els[i].classList.add(dir);
    }
    function step(ts) {
      if (start === null) start = ts;
      var k = Math.min(1, (ts - start) / TWEEN_MS);
      var e = 1 - Math.pow(1 - k, 3);
      q.shown = from + (to - from) * e;
      paint(sym, q.shown);
      if (k < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  // Each item: logo (when a logo file exists), name, code, price, change, and an intraday sparkline.
  function spark(sp, up) {
    if (!sp || sp.length < 2) return "";
    var w = 64, h = 22, lo = Math.min.apply(null, sp), hi = Math.max.apply(null, sp), span = hi - lo || 1;
    var pts = sp.map(function (v, i) {
      return (i / (sp.length - 1) * w).toFixed(1) + "," + (h - 2 - (v - lo) / span * (h - 4)).toFixed(1);
    });
    var cls = up ? "is-up" : "is-down";
    return '<svg class="tk__spark ' + cls + '" viewBox="0 0 ' + w + ' ' + h + '" width="' + w + '" height="' + h + '" aria-hidden="true">' +
      '<polygon class="tk__area" points="0,' + h + ' ' + pts.join(" ") + ' ' + w + ',' + h + '"/>' +
      '<polyline points="' + pts.join(" ") + '"/></svg>';
  }
  function itemHTML(sym) {
    var q = quotes[sym] || {};
    var logo = q.lg ? '<img class="tk__logo" src="assets/tickers/' + sym + '.png" alt="" width="30" height="30" loading="lazy" onerror="this.remove()">' : "";
    var code = q.k === "i" ? "" : '<span class="tk__sym">' + sym.replace(/\.(HK|SS|SZ)$/, "") + '</span>';
    return '<li class="tk' + (q.k === "i" ? " tk--idx" : "") + '" data-s="' + sym + '">' + logo +
      '<span class="tk__name"></span>' + code +
      '<span class="tk__px"></span><span class="tk__chg"></span>' + spark(q.sp, q.price >= q.prev) + '</li>';
  }
  function renderTickerNames() {
    if (!track) return;
    var els = track.querySelectorAll(".tk");
    for (var i = 0; i < els.length; i++) {
      var q = quotes[els[i].getAttribute("data-s")];
      if (q) els[i].querySelector(".tk__name").textContent = currentLang === "zh" ? q.zh : q.en;
    }
  }
  function build() {
    var one = order.map(itemHTML).join("");
    track.innerHTML = one + one.replace(/<li class="tk"/g, '<li class="tk" aria-hidden="true"');
    renderTickerNames();
    for (var i = 0; i < order.length; i++) paint(order[i], quotes[order[i]].shown);
    ticker.hidden = false;
    setSpeed();
  }
  // Constant ~30px/s whatever the track length; scrollWidth forces layout, no frame needed.
  function setSpeed() {
    if (!track.firstChild) return;
    track.style.setProperty("--tick-dur", Math.max(60, track.scrollWidth / 2 / 30) + "s");
  }
  window.addEventListener("resize", function () { if (track) setSpeed(); }, { passive: true });

  function load() {
    return fetch("quotes.json?t=" + Date.now(), { cache: "no-store" })
      .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(function (data) {
        var list = data.quotes || [];
        if (!list.length) { if (!order.length) ticker.hidden = true; return; }
        var fresh = !order.length;
        list.forEach(function (q) {
          var old = quotes[q.s];
          if (!old) {
            quotes[q.s] = { price: q.price, prev: q.prev, cur: q.cur, en: q.en, zh: q.zh, k: q.k, lg: q.lg, sp: q.sp, shown: q.price };
            return;
          }
          var from = old.shown;
          old.prev = q.prev;
          old.price = q.price;
          if (Math.abs(q.price - from) > 1e-9) tween(q.s, from, q.price);
        });
        if (fresh) {
          order = list.map(function (q) { return q.s; });
          build();
        }
      })
      // The band is laid out from the start (so the first screen never resizes); hide it only if no quotes ever arrive.
      .catch(function () { if (!order.length) ticker.hidden = true; });
  }

  if (ticker && track && window.fetch) {
    load();
    setInterval(function () { if (!document.hidden) load(); }, POLL_MS);
  } else if (ticker) {
    ticker.hidden = true;
  }

  /* ---------- Programs scroll chapter ----------
     The section pins while the visitor scrolls through it. Progress p (0-1)
     cross-fades four panels (intro + three programs), drifts the watermark
     word, opens the photo, and fills the progress line. Without motion
     (very short windows or reduced-motion) it is a plain stacked list. */
  (function () {
    var chapter = document.querySelector(".chapter");
    if (!chapter) return;
    var panels = chapter.querySelectorAll(".chapter__panel");
    var words = chapter.querySelectorAll(".chapter__word");
    var steps = chapter.querySelectorAll("[data-step]");
    var now = chapter.querySelector(".chapter__now");
    var NUM = ["—", "I", "II", "III"];
    var EDGES = [0, 0.2, 0.46, 0.72, 1];          // panel k owns [EDGES[k], EDGES[k+1]]
    var FADE = 0.05;
    var motionMQ = window.matchMedia("(min-height: 480px) and (prefers-reduced-motion: no-preference)");
    var clamp = function (v) { return v < 0 ? 0 : v > 1 ? 1 : v; };
    var smooth = function (a, b, v) { var t = clamp((v - a) / (b - a)); return t * t * t * (t * (t * 6 - 15) + 10); };
    var ticking = false, shown = -1, target = 0, current = 0, lastDrawn = -1;

    /* Candlestick scene drawn on canvas and driven by p. */
    var canvas = chapter.querySelector(".chapter__chart");
    var ctx = canvas && canvas.getContext("2d");
    var bars = (function () {
      // Seeded walk shaped like a rally, a sharp break, then a grinding recovery.
      var seed = 7, rnd = function () { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
      var plan = [[18, 0.9], [10, -0.6], [6, -3.2], [10, -0.2], [16, 0.55], [12, 0.15], [18, 0.6]];
      var out = [], px = 100;
      plan.forEach(function (seg) {
        for (var i = 0; i < seg[0]; i++) {
          var o = px, c = o + seg[1] + (rnd() - 0.5) * 2.6;
          var h = Math.max(o, c) + rnd() * 1.4, l = Math.min(o, c) - rnd() * 1.4;
          out.push([o, h, l, c]); px = c;
        }
      });
      return out;
    })();
    function ma(i, n) { var s = 0, k = 0; for (var j = Math.max(0, i - n + 1); j <= i; j++) { s += bars[j][3]; k++; } return s / k; }
    function size() {
      if (!canvas) return;
      var r = canvas.getBoundingClientRect(), d = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(r.width * d); canvas.height = Math.round(r.height * d);
      ctx.setTransform(d, 0, 0, d, 0, 0);
    }
    function draw(p) {
      if (!ctx || !canvas.width) return;
      var d = Math.min(window.devicePixelRatio || 1, 2), W = canvas.width / d, H = canvas.height / d;
      var n = bars.length;
      var reveal = Math.max(8, Math.round(n * (0.32 + 0.68 * smooth(0.12, 0.62, p))));
      var zoom = 1.25 - 0.25 * smooth(0.66, 0.98, p);            // camera pulls back in the last chapter
      var visible = Math.min(n, Math.round(n / zoom));
      var start = Math.max(0, reveal - Math.round(visible * 0.82));
      var slice = bars.slice(start, reveal);
      var lo = Infinity, hi = -Infinity;
      slice.forEach(function (b) { lo = Math.min(lo, b[2]); hi = Math.max(hi, b[1]); });
      var pad = (hi - lo) * 0.18; lo -= pad; hi += pad;
      var step = W / visible, bw = Math.max(2, step * 0.56);
      var y = function (v) { return H - (v - lo) / (hi - lo) * H; };
      var x = function (i) { return (i - start + 0.5) * step; };

      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = "#05080d"; ctx.fillRect(0, 0, W, H);
      ctx.fillStyle = "rgba(255,255,255,.05)";
      for (var gx = 20; gx < W; gx += 40) for (var gy = 20; gy < H; gy += 40) ctx.fillRect(gx, gy, 1, 1);

      ctx.save();
      if (!MOTION.lowPower) ctx.filter = "blur(" + (3 * (1 - smooth(0.08, 0.24, p))).toFixed(2) + "px)";   // focus pull on entry (skipped on low-power devices)
      // Trend lines (analysis) draw in during Research
      var tl = smooth(0.22, 0.4, p);
      if (tl > 0) {
        ctx.setLineDash([2, 4]); ctx.lineWidth = 1;
        [[0.38, -0.06, "rgba(80,140,255,.75)"], [0.58, -0.1, "rgba(61,190,139,.6)"]].forEach(function (t) {
          ctx.strokeStyle = t[2]; ctx.beginPath();
          ctx.moveTo(0, H * t[0]); ctx.lineTo(W * tl, H * (t[0] + t[1] * tl)); ctx.stroke();
        });
        ctx.setLineDash([]);
      }
      slice.forEach(function (b, k) {
        var i = start + k, up = b[3] >= b[0];
        var fade = Math.min(1, (reveal - i) / 3);
        ctx.globalAlpha = 0.25 + 0.75 * fade;
        ctx.strokeStyle = ctx.fillStyle = up ? "#3DBE8B" : "#FF5757";
        ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(x(i), y(b[1])); ctx.lineTo(x(i), y(b[2])); ctx.stroke();
        var top = y(Math.max(b[0], b[3])), h = Math.max(1, Math.abs(y(b[0]) - y(b[3])));
        ctx.fillRect(x(i) - bw / 2, top, bw, h);
      });
      ctx.globalAlpha = 1;
      // Moving average and price tag arrive with Credentials
      var mv = smooth(0.48, 0.62, p);
      if (mv > 0) {
        ctx.strokeStyle = "rgba(255,255,255," + (0.55 * mv).toFixed(3) + ")"; ctx.lineWidth = 1.4; ctx.beginPath();
        var upto = start + Math.round(slice.length * mv);
        for (var i = start; i < upto; i++) { var py = y(ma(i, 9)); if (i === start) ctx.moveTo(x(i), py); else ctx.lineTo(x(i), py); }
        ctx.stroke();
        var last = bars[reveal - 1][3], ly = y(last);
        ctx.globalAlpha = mv;
        ctx.setLineDash([3, 3]); ctx.strokeStyle = "rgba(255,255,255,.3)"; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(0, ly); ctx.lineTo(W, ly); ctx.stroke(); ctx.setLineDash([]);
        ctx.fillStyle = "#FF5757"; ctx.fillRect(W - 58, ly - 10, 58, 20);
        ctx.fillStyle = "#fff"; ctx.font = "600 11px Inter, system-ui, sans-serif"; ctx.textAlign = "center"; ctx.textBaseline = "middle";
        ctx.fillText(last.toFixed(2), W - 29, ly + 0.5);
        ctx.globalAlpha = 1;
      }
      ctx.restore();
      // Depth of field toward the right edge, like a lens focused on the left
      var g = ctx.createLinearGradient(W * 0.6, 0, W, 0);
      g.addColorStop(0, "rgba(5,8,13,0)"); g.addColorStop(1, "rgba(5,8,13,.55)");
      ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
    }

    function measure() {
      var r = chapter.getBoundingClientRect();
      var total = chapter.offsetHeight - window.innerHeight;
      return total > 0 ? clamp(-r.top / total) : 0;
    }
    function apply(p) {
      chapter.style.setProperty("--p", p.toFixed(4));
      chapter.style.setProperty("--media", smooth(0, 0.16, p).toFixed(4));
      if (Math.abs(p - lastDrawn) > 0.0005) { draw(p); lastDrawn = p; }
      var active = 0;
      for (var k = 0; k < panels.length; k++) {
        var enter = k === 0 ? 1 : smooth(EDGES[k], EDGES[k] + FADE, p);
        var exit = k === panels.length - 1 ? 0 : smooth(EDGES[k + 1] - FADE * 0.8, EDGES[k + 1], p);
        var vis = enter * (1 - exit);
        if (vis > 0.5) active = k;
        var kids = panels[k].children;
        for (var c = 0; c < kids.length; c++) {
          var e = k === 0 ? 1 : smooth(EDGES[k] + c * 0.012, EDGES[k] + FADE + c * 0.012, p);
          kids[c].style.opacity = (e * (1 - exit)).toFixed(4);
          kids[c].style.transform = "translate3d(0," + ((1 - e) * 26 - exit * (14 + c * 4)).toFixed(2) + "px,0)";
        }
        panels[k].setAttribute("aria-hidden", vis < 0.5 ? "true" : "false");
        if (words[k]) {
          words[k].style.opacity = (vis * 0.9).toFixed(4);
          words[k].style.transform = "translate3d(" + (-(p * 60) + (1 - enter) * 40).toFixed(2) + "px,0,0)";
        }
      }
      if (active !== shown) {
        shown = active;
        now.textContent = NUM[active];
        for (var s = 0; s < steps.length; s++) {
          if (+steps[s].getAttribute("data-step") === active) steps[s].setAttribute("aria-current", "step");
          else steps[s].removeAttribute("aria-current");
        }
      }
    }
    // Ease toward the scroll position so wheel steps glide instead of jumping.
    var lastT = 0;
    function frame(t) {
      var dt = lastT ? Math.min(0.05, (t - lastT) / 1000) : 0.016;
      lastT = t;
      var tau = MOTION.tau;                              // 0 on touch / low-power: follow scroll exactly
      current = tau > 0 ? current + (target - current) * (1 - Math.exp(-dt / tau)) : target;
      if (Math.abs(target - current) < 0.0004) current = target;
      apply(current);
      if (current !== target) requestAnimationFrame(frame); else { ticking = false; lastT = 0; }
    }
    function onScroll() {
      if (!chapter.classList.contains("is-motion")) return;
      target = measure();
      if (!ticking) { ticking = true; requestAnimationFrame(frame); }
    }
    function sync() {
      var on = motionMQ.matches;
      chapter.classList.toggle("is-motion", on);
      size(); lastDrawn = -1;
      if (on) { current = target = measure(); apply(current); return; }
      draw(1);
      for (var k = 0; k < panels.length; k++) {
        panels[k].removeAttribute("aria-hidden");
        for (var c = 0; c < panels[k].children.length; c++) { panels[k].children[c].style.opacity = ""; panels[k].children[c].style.transform = ""; }
      }
    }
    for (var s = 0; s < steps.length; s++) {
      steps[s].addEventListener("click", function () {
        var k = +this.getAttribute("data-step");
        var total = chapter.offsetHeight - window.innerHeight;
        var mid = (EDGES[k] + EDGES[k + 1]) / 2;
        var top = chapter.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: top + mid * total, behavior: "smooth" });
      });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", sync, { passive: true });
    if (motionMQ.addEventListener) motionMQ.addEventListener("change", sync);
    sync();
  })();

  /* ---------- Mobile menu ---------- */
  function isOpen() {
    return toggle && toggle.getAttribute("aria-expanded") === "true";
  }

  function syncMenuLabel() {
    if (toggle) toggle.setAttribute("aria-label", t(isOpen() ? "a11y.menuClose" : "a11y.menu"));
  }

  function setMenu(open) {
    if (!toggle || !nav) return;
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    nav.classList.toggle("is-open", open);
    syncMenuLabel();
  }

  if (toggle) {
    toggle.addEventListener("click", function () { setMenu(!isOpen()); });
  }
  if (menu) {
    menu.addEventListener("click", function (e) {
      if (e.target.closest && e.target.closest("a")) setMenu(false);
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && isOpen()) {
      setMenu(false);
      toggle.focus();
    }
  });
  window.addEventListener("resize", function () {
    if (window.innerWidth > 980 && isOpen()) setMenu(false);
  }, { passive: true });

  /* ---------- Language buttons ---------- */
  var LANG_FADE_MS = 180;
  var langTimer;
  var langBtns = document.querySelectorAll(".lang__btn");
  for (var n = 0; n < langBtns.length; n++) {
    langBtns[n].addEventListener("click", function (e) {
      var lang = this.getAttribute("data-lang");
      if (e.detail > 0) this.blur(); // mouse/touch: no lingering focus ring; keyboard keeps it
      saveLang(lang);
      if (lang === currentLang) return;
      // Single-line labels fade out, swap, fade back in; text blocks crossfade in place (CSS).
      clearTimeout(langTimer);
      root.classList.add("lang-out");
      langTimer = setTimeout(function () {
        applyLang(lang);
        layoutNav();
        langTimer = setTimeout(function () { root.classList.remove("lang-out"); }, 30);
      }, LANG_FADE_MS);
    });
  }

  /* ---------- Nav state on scroll: capsule offset, active-section dot ---------- */
  var dot = menu && menu.querySelector(".menu__dot");
  var navLinks = menu ? Array.prototype.slice.call(menu.querySelectorAll('a[href^="#"]')) : [];
  var spyTargets = navLinks.map(function (a) { return document.getElementById(a.getAttribute("href").slice(1)); });
  var activeLink = null;

  // Offsets use offsetLeft/offsetWidth, which ignore the capsule's own transform.
  function layoutNav() {
    if (!menu || !nav) return;
    var shift = (nav.clientWidth - menu.offsetWidth) / 2 - menu.offsetLeft;
    menu.style.setProperty("--menu-x", Math.round(shift) + "px");
    if (dot && activeLink) dot.style.setProperty("--dot-x", Math.round(activeLink.offsetLeft + activeLink.offsetWidth / 2 - 3) + "px");
  }

  function spy() {
    var line = window.innerHeight * 0.4, next = null;
    for (var k = 0; k < spyTargets.length; k++) {
      if (spyTargets[k] && spyTargets[k].getBoundingClientRect().top <= line) next = navLinks[k];
    }
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) next = navLinks[navLinks.length - 1];
    if (next === activeLink) return;
    if (activeLink) activeLink.classList.remove("is-active");
    activeLink = next;
    if (activeLink) activeLink.classList.add("is-active");
    if (dot) dot.classList.toggle("is-on", !!activeLink);
    layoutNav();
  }

  function onScroll() {
    if (nav) nav.classList.toggle("is-scrolled", window.scrollY > 8);
    spy();
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", layoutNav, { passive: true });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(layoutNav);
  onScroll();
  layoutNav();

  /* ---------- Reveal on scroll ---------- */
  var reduce = REDUCE;
  if (!reduce && "IntersectionObserver" in window) {
    root.classList.add("js-motion");
    var io = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting && !(root.classList.contains("intro") && entries[i].target.closest(".hero"))) {
          entries[i].target.classList.add("is-in");
          io.unobserve(entries[i].target);
        }
      }
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    var items = document.querySelectorAll(".reveal");
    for (var r = 0; r < items.length; r++) io.observe(items[r]);
  }

  /* ---------- Scroll motion ----------
     One requestAnimationFrame loop drives every scroll effect. Each [data-fx]
     element gets --fx: 0 as its top enters the bottom of the screen, 1 as its
     bottom leaves the top. CSS turns --fx into translate / scale / opacity only,
     so nothing triggers layout. --amp scales every movement:
       full  (desktop, capable): amp 1, scroll smoothed with time-based damping
       lite  (touch, narrow or low-power): amp .55, no smoothing (native momentum)
       off   (prefers-reduced-motion): nothing moves, --amp stays 0 */

  (function () {
    if (MOTION.tier === "off") return;
    var els = document.querySelectorAll("[data-fx]");
    if (!els.length) return;
    var active = [];
    var smoothY = window.pageYOffset, lastT = 0, running = false;
    var vis = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        var i = active.indexOf(en.target);
        en.target.classList.toggle("fx-on", en.isIntersecting);
        if (en.isIntersecting && i < 0) active.push(en.target);
        else if (!en.isIntersecting && i >= 0) active.splice(i, 1);
      });
      kick();
    }, { rootMargin: "25% 0px 25% 0px" });
    for (var i = 0; i < els.length; i++) vis.observe(els[i]);

    function paint() {
      var vh = window.innerHeight, lag = window.pageYOffset - smoothY;
      for (var k = 0; k < active.length; k++) {
        var r = active[k].getBoundingClientRect();
        var top = r.top + lag;                               // where the element would be at the smoothed position
        var p = active[k].getAttribute("data-fx") === "exit"
          ? -top / r.height                                 // blocks that start on screen: 0 at rest, 1 once scrolled away
          : (vh - top) / (vh + r.height);
        active[k].style.setProperty("--fx", (p < 0 ? 0 : p > 1 ? 1 : p).toFixed(4));
      }
    }
    function frame(t) {
      var dt = lastT ? Math.min(0.05, (t - lastT) / 1000) : 0.016;
      lastT = t;
      var y = window.pageYOffset;
      if (MOTION.tau > 0) {
        smoothY += (y - smoothY) * (1 - Math.exp(-dt / MOTION.tau));   // same feel at 60 Hz and 120 Hz
        if (Math.abs(y - smoothY) < 0.3) smoothY = y;
      } else smoothY = y;
      paint();
      if (smoothY !== y) requestAnimationFrame(frame);
      else { running = false; lastT = 0; }
    }
    function kick() { if (!running && active.length) { running = true; requestAnimationFrame(frame); } }
    window.addEventListener("scroll", kick, { passive: true });
    window.addEventListener("resize", kick, { passive: true });
    kick();
  })();

  /* The ticker band only animates while it is on screen. */
  (function () {
    var band = document.getElementById("ticker");
    if (!band || !("IntersectionObserver" in window)) return;
    new IntersectionObserver(function (en) { band.classList.toggle("is-away", !en[0].isIntersecting); }).observe(band);
  })();

  /* ---------- Opening shot ---------- */
  // <head> adds .intro on every load: the city starts zoomed in,
  // then pulls back into the page; any input skips straight to a quick version.
  if (root.classList.contains("intro")) {
    var INTRO_HOLD_MS = 200;
    var INPUTS = ["wheel", "touchstart", "keydown", "pointerdown"];
    var introDone = false;
    var endIntro = function (e) {
      if (introDone) return;
      introDone = true;
      var fast = !!(e && e.type);
      root.classList.add("intro-run", "intro-played");
      if (fast) root.classList.add("intro-fast");
      root.classList.remove("intro");
      var heroItems = document.querySelectorAll(".hero .reveal");
      for (var h = 0; h < heroItems.length; h++) {
        heroItems[h].style.transitionDelay = (fast ? 0.1 + h * 0.08 : 0.8 + h * 0.12) + "s";
        heroItems[h].classList.add("is-in");
        if (io) io.unobserve(heroItems[h]);
      }
      INPUTS.forEach(function (ev) { window.removeEventListener(ev, endIntro); });
      setTimeout(function () {
        root.classList.remove("intro-run", "intro-fast");
        for (var h = 0; h < heroItems.length; h++) heroItems[h].style.transitionDelay = "";
      }, fast ? 1500 : 2600);
    };
    INPUTS.forEach(function (ev) { window.addEventListener(ev, endIntro, { passive: true }); });
    // Start once the photo is ready (it is preloaded), but never wait more than 1.2s for it.
    var heroImg = document.querySelector(".hero__media img");
    var startHold = function () { setTimeout(endIntro, INTRO_HOLD_MS); };
    if (!heroImg || heroImg.complete) startHold();
    else {
      var held = false;
      var once = function () { if (!held) { held = true; startHold(); } };
      heroImg.addEventListener("load", once);
      heroImg.addEventListener("error", once);
      setTimeout(once, 1200);
    }
  }

  /* ---------- Membership enquiry form (apply.html) ----------
     Posts straight to the club's Google Form. The request is cross-origin and opaque
     (no-cors), so the page cannot read Google's answer: a rejected submission would
     look sent. Validation here must therefore be at least as strict as the Google
     form's own (name required; email required and email-shaped). */
  var applyForm = document.querySelector(".apply__form");
  if (applyForm && window.fetch && window.URLSearchParams) {
    var WHY = "entry.1576637996";
    var OTHER = "__other_option__";
    var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var nameIn = document.getElementById("apply-name");
    var emailIn = document.getElementById("apply-email");
    var otherIn = document.getElementById("apply-other");
    var noteIn = document.getElementById("apply-note");
    var trap = applyForm.querySelector('.apply__hp input');
    var submitBtn = applyForm.querySelector(".apply__submit");
    var failMsg = applyForm.querySelector(".apply__fail");
    var doneBox = document.querySelector(".apply__done");
    var sending = false;

    applyForm.noValidate = true; // our messages follow the language toggle; the browser's don't

    var whyValue = function () {
      var r = applyForm.querySelector('input[name="' + WHY + '"]:checked');
      return r ? r.value : "";
    };
    var check = function (el) {
      var v = el.value.trim();
      var bad = el === nameIn ? !v
        : el === emailIn ? !EMAIL_RE.test(v)
        : el === otherIn ? !otherIn.hidden && !v
        : false;
      if (bad) el.setAttribute("aria-invalid", "true"); else el.removeAttribute("aria-invalid");
      var err = document.getElementById(el.getAttribute("aria-describedby"));
      if (err) err.hidden = !bad;
      return !bad;
    };
    var setSending = function (on) {
      sending = on;
      submitBtn.disabled = on;
      applyForm.setAttribute("aria-busy", on ? "true" : "false");
      submitBtn.querySelector(".apply__idle").hidden = on;
      submitBtn.querySelector(".apply__busy").hidden = !on;
    };
    var finish = function () {
      applyForm.hidden = true;
      doneBox.hidden = false;
      doneBox.focus();
    };

    applyForm.addEventListener("change", function (e) {
      if (e.target.name !== WHY) return;
      var other = whyValue() === OTHER;
      otherIn.hidden = !other;
      if (other) otherIn.focus(); else check(otherIn);
    });
    // Once a field has been flagged, re-check it as the visitor fixes it.
    applyForm.addEventListener("input", function (e) {
      if (e.target.getAttribute("aria-invalid") === "true") check(e.target);
    });

    applyForm.addEventListener("submit", function (e) {
      e.preventDefault();
      if (sending) return;
      var firstBad = null;
      [nameIn, emailIn, otherIn].forEach(function (el) { if (!check(el) && !firstBad) firstBad = el; });
      if (firstBad) { firstBad.focus(); return; }
      if (trap && trap.value) { finish(); return; } // a bot filled the hidden field: pretend, send nothing

      var body = new URLSearchParams();
      body.append(nameIn.name, nameIn.value.trim());
      body.append(emailIn.name, emailIn.value.trim());
      var why = whyValue();
      if (why) {
        body.append(WHY, why);
        if (why === OTHER) body.append(otherIn.name, otherIn.value.trim());
      }
      if (noteIn.value.trim()) body.append(noteIn.name, noteIn.value.trim());

      failMsg.hidden = true;
      setSending(true);
      fetch(applyForm.action, { method: "POST", mode: "no-cors", body: body })
        .then(function () { setSending(false); finish(); })
        .catch(function () { setSending(false); failMsg.hidden = false; });
    });
  }

  applyLang(readLang());
})();
