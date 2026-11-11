/* =========================================================
   محرك عرض الموقع — لا تحتاج لتعديل هذا الملف عادة
   Site renderer — normally no need to edit this file
   ========================================================= */
(function () {
  "use strict";

  var root = document.documentElement;
  var lang = root.getAttribute("lang") === "en" ? "en" : "ar";
  var page = document.body.getAttribute("data-page") || "home";
  var base = document.body.getAttribute("data-base") || "";
  var C = window.SITE_CONTENT[lang];
  var CFG = window.SITE_CONFIG;
  var otherBase = lang === "ar" ? "en/" : "../";

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  // **نص** => <strong>نص</strong>
  function rich(s) { return esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"); }
  function ltr(s) { return '<bdi dir="ltr">' + esc(s) + "</bdi>"; }
  // كل روابط واتساب تحمل رسالة جاهزة تبدأ بوسم الموقع لتعرف أن العميل قادم من الموقع
  function waLink(text) {
    var msg = C.common.waTag + "\n" + (text || C.common.waGreeting);
    return "https://wa.me/" + CFG.whatsapp + "?text=" + encodeURIComponent(msg);
  }
  // same-language page links: pages of one language share a folder;
  // only the 404 page (served from any URL depth) needs the absolute base
  function link(p) { return page === "notfound" ? base + p : p; }
  var pageFile = { home: "index.html", services: "services.html", contact: "contact.html", notfound: "index.html" };

  /* ---------- icons (inline SVG, stroke = currentColor) ---------- */
  var P = {
    building: '<path d="M4 21V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16"/><path d="M14 9h5a1 1 0 0 1 1 1v11"/><path d="M3 21h18"/><path d="M8 8h2M8 12h2M8 16h2M17 13h0M17 17h0"/>',
    license: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h5"/><circle cx="15.5" cy="16" r="2"/><path d="M14.5 17.8 14 21l1.5-.8L17 21l-.5-3.2"/>',
    blueprint: '<path d="M3 20h18"/><path d="M5 20V10l7-5 7 5v10"/><path d="M9 20v-6h6v6"/><path d="M12 5V2"/>',
    bank: '<path d="M3 10 12 4l9 6"/><path d="M5 10v8M9.5 10v8M14.5 10v8M19 10v8"/><path d="M3 21h18M4 18h16"/>',
    handshake: '<path d="m11 17 2 2a1.4 1.4 0 0 0 2-2"/><path d="m14 14 2.5 2.5a1.4 1.4 0 0 0 2-2L15 11l-1.5 1.5a2 2 0 0 1-3-3L13 7l-1-1-3 3-1 1H3"/><path d="M21 11h-2.5L15 7.5"/><path d="m3 11 6 6a1.4 1.4 0 0 0 2-2"/>',
    pen: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
    eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
    route: '<circle cx="6" cy="19" r="2"/><circle cx="18" cy="5" r="2"/><path d="M8 19h8.5a3.5 3.5 0 0 0 0-7h-9a3.5 3.5 0 0 1 0-7H16"/>',
    lock: '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
    layers: '<path d="m12 3 9 5-9 5-9-5Z"/><path d="m3 13 9 5 9-5"/>',
    pin: '<path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12Z"/><circle cx="12" cy="9" r="2.5"/>',
    chat: '<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
    phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    check: '<path d="m5 12 4.5 4.5L19 7"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    close: '<path d="M6 6l12 12M18 6 6 18"/>',
    plus: '<path d="M12 5v14M5 12h14"/>'
  };
  function icon(name, cls) {
    return '<svg class="ico ' + (cls || "") + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (P[name] || "") + "</svg>";
  }
  var WA_SVG = '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.48.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35M12.05 21.5h-.01a9.5 9.5 0 0 1-4.84-1.33l-.35-.2-3.6.94.96-3.5-.23-.36a9.45 9.45 0 0 1-1.45-5.04c0-5.24 4.27-9.5 9.52-9.5 2.54 0 4.93.99 6.72 2.79a9.43 9.43 0 0 1 2.78 6.72c0 5.24-4.27 9.5-9.5 9.5m8.1-17.6A11.37 11.37 0 0 0 12.04.5C5.73.5.6 5.63.6 11.94c0 2.02.53 3.99 1.53 5.72L.5 23.5l5.98-1.57a11.4 11.4 0 0 0 5.46 1.39h.01c6.3 0 11.44-5.13 11.44-11.44 0-3.06-1.19-5.93-3.35-8.09"/></svg>';

  function logoMark() {
    // رمز العدسة المكبرة المأخوذ من لوجو ديسكفر
    return '<svg class="logo-mark" viewBox="0 0 48 48" aria-hidden="true"><rect width="48" height="48" rx="12" fill="#fff"/><circle cx="21" cy="20" r="10.5" fill="none" stroke="var(--c-primary)" stroke-width="3.6"/><path d="M15.6 19.4a6 6 0 0 1 3.4-4.6" fill="none" stroke="var(--c-primary)" stroke-width="2.2" stroke-linecap="round"/><circle cx="21.6" cy="14.2" r="1.3" fill="var(--c-primary)"/><path d="m29.2 28.6 1.6 1.6M32.6 32 39 38.6" stroke="var(--c-primary)" stroke-width="4" stroke-linecap="round"/></svg>';
  }
  // أيقونة دائرية بتدرج كحلي وعدسة بيضاء (مستوحاة من حرف O في لوجو ديسكفر)
  function logoBadge() {
    return '<svg class="logo-badge" viewBox="0 0 48 48" aria-hidden="true"><defs><radialGradient id="lgB" cx="35%" cy="28%" r="80%"><stop offset="0" stop-color="#3f6fd1"/><stop offset=".55" stop-color="#0b3487"/><stop offset="1" stop-color="#021a4d"/></radialGradient></defs>' +
      '<circle cx="24" cy="24" r="24" fill="url(#lgB)"/><circle cx="21.5" cy="20.5" r="9" fill="none" stroke="#fff" stroke-width="3.2"/><path d="M16.9 20a5.2 5.2 0 0 1 3-4" fill="none" stroke="#fff" stroke-width="1.9" stroke-linecap="round"/><circle cx="22" cy="15.6" r="1.1" fill="#fff"/><path d="m28.2 27.4 1.3 1.3M31.1 30.3l5.4 5.6" stroke="#fff" stroke-width="3.6" stroke-linecap="round"/></svg>';
  }
  function logo(extraCls) {
    var href = link("index.html");
    var light = extraCls === "logo-light";
    if (CFG.logoStyle !== "image") {
      return '<a class="logo logo-compact ' + (extraCls || "") + '" href="' + href + '" aria-label="' + esc(C.brand.full) + '">' + logoBadge() +
        '<span class="logo-word" dir="ltr">' + esc(CFG.logoWord || "DISCOVER") + "</span></a>";
    }
    var src = light ? (CFG.logoImageLight || CFG.logoImage) : CFG.logoImage;
    if (src) {
      return '<a class="logo has-img ' + (extraCls || "") + '" href="' + href + '">' + (CFG.logoBadge ? logoBadge() : "") +
        '<img src="' + base + src + '" alt="' + esc(C.brand.full) + '" class="logo-img" width="' + (light ? 614 : 453) + '" height="' + (light ? 240 : 150) + '"></a>';
    }
    return '<a class="logo ' + (extraCls || "") + '" href="' + href + '" aria-label="' + esc(C.brand.full) + '">' + logoMark() +
      '<span class="logo-text"><span class="logo-name">' + esc(C.brand.name) + '</span><span class="logo-sub">' + esc(C.brand.sub) + "</span></span></a>";
  }

  /* ---------- header / footer ---------- */
  function header() {
    var homeAnchor = page === "home" ? "" : link("index.html");
    var items = [
      [homeAnchor + "#top", C.nav.home, "home"],
      [homeAnchor + "#about", C.nav.about, ""],
      [link("services.html"), C.nav.services, "services"],
      [homeAnchor + "#process", C.nav.process, ""],
      [homeAnchor + "#faq", C.nav.faq, ""],
      [link("contact.html"), C.nav.contact, "contact"]
    ];
    var nav = items.map(function (it) {
      var cur = it[2] && it[2] === page ? ' aria-current="page"' : "";
      return '<li><a href="' + it[0] + '"' + cur + ">" + esc(it[1]) + "</a></li>";
    }).join("");
    var other = page === "notfound"
      ? base + (lang === "ar" ? "en/" : "") + "index.html"
      : otherBase + pageFile[page];
    return '<header class="site-header" id="siteHeader"><div class="container header-inner">' + logo() +
      '<nav class="main-nav" id="mainNav" aria-label="' + esc(C.nav.menu) + '"><ul>' + nav + "</ul>" +
      '<a class="btn btn-wa nav-wa" href="' + waLink() + '" target="_blank" rel="noopener">' + WA_SVG + "<span>" + esc(C.common.whatsapp) + "</span></a></nav>" +
      '<div class="header-actions"><a class="lang-switch" href="' + other + '" hreflang="' + (lang === "ar" ? "en" : "ar") + '" lang="' + (lang === "ar" ? "en" : "ar") + '">' + icon("globe") + "<span>" + esc(C.nav.lang) + "</span></a>" +
      '<button class="nav-toggle" id="navToggle" type="button" aria-expanded="false" aria-controls="mainNav" aria-label="' + esc(C.nav.menu) + '">' + icon("menu", "i-open") + icon("close", "i-close") + "</button></div>" +
      "</div></header>";
  }

  function contactList(cls) {
    var out = '<ul class="contact-list ' + (cls || "") + '">';
    out += '<li><a href="' + waLink() + '" target="_blank" rel="noopener"><span class="cl-ico wa">' + WA_SVG + '</span><span><small>' + esc(C.common.whatsappLabel) + "</small>" + ltr(CFG.phones[0].display) + "</span></a></li>";
    CFG.phones.forEach(function (p) {
      out += '<li><a href="tel:' + p.tel + '"><span class="cl-ico">' + icon("phone") + '</span><span><small>' + esc(C.common.phoneLabel) + "</small>" + ltr(p.display) + "</span></a></li>";
    });
    out += '<li><a href="mailto:' + CFG.email + '"><span class="cl-ico">' + icon("mail") + '</span><span><small>' + esc(C.common.emailLabel) + "</small>" + ltr(CFG.email) + "</span></a></li>";
    out += '<li><div><span class="cl-ico">' + icon("pin") + '</span><span><small>' + esc(C.common.locationLabel) + "</small>" + esc(C.common.location) + "</span></div></li>";
    return out + "</ul>";
  }

  function footer() {
    var homeAnchor = page === "home" ? "" : link("index.html");
    return '<footer class="site-footer"><div class="container footer-grid">' +
      '<div class="footer-brand">' + logo("logo-light") + '<p class="footer-tag">' + esc(C.tagline) + "</p><p>" + esc(C.brand.full) + "</p></div>" +
      '<div><h3>' + esc(C.common.quickLinks) + '</h3><ul class="footer-links">' +
      '<li><a href="' + homeAnchor + '#about">' + esc(C.nav.about) + "</a></li>" +
      '<li><a href="' + link("services.html") + '">' + esc(C.nav.services) + "</a></li>" +
      '<li><a href="' + homeAnchor + '#process">' + esc(C.nav.process) + "</a></li>" +
      '<li><a href="' + homeAnchor + '#faq">' + esc(C.nav.faq) + "</a></li>" +
      '<li><a href="' + link("contact.html") + '">' + esc(C.nav.contact) + "</a></li></ul></div>" +
      '<div><h3>' + esc(C.common.contactUs) + "</h3>" + contactList("contact-list-footer") + "</div>" +
      '</div><div class="footer-bottom"><div class="container">© <span id="yr"></span> ' + esc(C.brand.full) + ". " + esc(C.common.rights) + ".</div></div></footer>" +
      '<a class="wa-float" href="' + waLink() + '" target="_blank" rel="noopener" aria-label="' + esc(C.common.floatingWa) + '">' + WA_SVG + '<span class="wa-float-label">' + esc(C.common.floatingWa) + "</span></a>";
  }

  /* ---------- sections ---------- */
  var PH = CFG.photos || {};
  function photo(name) { return base + "assets/img/photos/" + name; }
  // absolute URL: a url() inside a CSS variable resolves against the stylesheet, not the page
  function bgStyle(name) { return name ? ' style="--bg:url(\'' + new URL(photo(name), location.href).href + '\')"' : ""; }
  function img(name, alt, cls, eager) {
    return '<img class="' + (cls || "") + '" src="' + photo(name) + '" alt="' + esc(alt || "") + '"' + (eager ? "" : ' loading="lazy"') + ' decoding="async">';
  }

  function sectionHead(kicker, title, intro, center) {
    return '<div class="section-head' + (center ? " center" : "") + '"><span class="kicker">' + esc(kicker) + "</span><h2>" + esc(title) + "</h2>" + (intro ? '<p class="lead">' + esc(intro) + "</p>" : "") + "</div>";
  }

  // السلايدر الرئيسي: صورة كبيرة بعرض الشاشة لكل خدمة
  // الواجهة الثابتة (heroStyle: "fixed" في config.js)، والسلايدر محفوظ كخيار بديل
  function hero() {
    if (CFG.heroStyle === "slider" || !C.heroFixed) return heroSlider();
    var H = C.heroFixed;
    var bg = CFG.heroImage || (C.slides && C.slides[0] && C.slides[0].img);
    return '<section class="hero-fixed" id="top">' +
      (bg ? '<img class="hero-img" src="' + photo(bg) + '" alt="' + esc(H.title) + '" fetchpriority="high" decoding="async">' : "") +
      '<div class="slide-shade" aria-hidden="true"></div>' +
      '<div class="container hero-fixed-inner"><div class="hero-copy">' +
      '<span class="eyebrow">' + esc(H.eyebrow) + "</span>" +
      '<h1 class="hero-title">' + esc(H.title) + "</h1>" +
      '<p class="hero-slogan">' + esc(H.slogan) + "</p>" +
      '<p class="hero-text">' + esc(H.text) + "</p>" +
      '<div class="hero-ctas"><a class="btn btn-wa btn-lg" href="' + waLink() + '" target="_blank" rel="noopener">' + WA_SVG + "<span>" + esc(C.hero.primary) + "</span></a>" +
      '<a class="btn btn-ghost-light btn-lg" href="tel:' + CFG.phones[0].tel + '">' + icon("phone") + "<span>" + esc(C.common.call) + "</span></a>" +
      '<a class="hero-link" href="' + link("services.html") + '">' + esc(C.hero.secondary) + icon("arrow", "flip") + "</a></div>" +
      "</div></div></section>";
  }

  function heroSlider() {
    var slides = C.slides || [];
    var L = C.sliderLabels;
    var chev = '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 4 8 8-8 8"/></svg>';
    var items = slides.map(function (s, i) {
      var more = s.service ? link("services.html") + "#" + s.service : link("services.html");
      var Tag = i === 0 ? "h1" : "h2";
      return '<div class="slide' + (i === 0 ? " is-active" : "") + '" role="group" aria-roledescription="slide" aria-label="' + (i + 1) + " / " + slides.length + '"' + (i === 0 ? "" : " inert") + ">" +
        '<img class="slide-img" src="' + photo(s.img) + '" alt="' + esc(s.eyebrow) + '"' + (i === 0 ? ' fetchpriority="high"' : ' loading="lazy"') + ' decoding="async">' +
        '<div class="slide-shade"></div>' +
        '<div class="container slide-inner"><div class="slide-copy">' +
        '<span class="eyebrow">' + esc(s.eyebrow) + "</span><" + Tag + ' class="slide-title">' + esc(s.title) + "</" + Tag + ">" +
        '<p class="slide-text">' + esc(s.text) + "</p>" +
        '<div class="hero-ctas"><a class="btn btn-wa btn-lg" href="' + waLink() + '" target="_blank" rel="noopener">' + WA_SVG + "<span>" + esc(C.hero.primary) + "</span></a>" +
        '<a class="btn btn-ghost-light btn-lg" href="' + more + '"><span>' + esc(s.more) + "</span>" + icon("arrow", "flip") + "</a></div>" +
        "</div></div></div>";
    }).join("");
    var dots = slides.map(function (s, i) {
      return '<button type="button" class="dot' + (i === 0 ? " is-active" : "") + '" data-go="' + i + '" aria-label="' + esc(L.goto) + " " + (i + 1) + '"' + (i === 0 ? ' aria-current="true"' : "") + "></button>";
    }).join("");
    return '<section class="hero-slider" id="top" aria-roledescription="carousel" aria-label="' + esc(L.label) + '">' +
      '<div class="slides">' + items + "</div>" +
      (slides.length > 1
        ? '<button type="button" class="sl-arrow sl-prev" aria-label="' + esc(L.prev) + '">' + chev + "</button>" +
          '<button type="button" class="sl-arrow sl-next" aria-label="' + esc(L.next) + '">' + chev + "</button>" +
          '<div class="sl-dots">' + dots + "</div><div class=\"sl-progress\"><span></span></div>"
        : "") +
      "</section>";
  }

  function initSlider() {
    var root = document.querySelector(".hero-slider");
    if (!root) return;
    var slides = [].slice.call(root.querySelectorAll(".slide"));
    var dots = [].slice.call(root.querySelectorAll(".dot"));
    if (slides.length < 2) return;
    var cur = 0, timer = null, paused = false;
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var ms = CFG.slideInterval || 6500;
    var bar = root.querySelector(".sl-progress span");
    function go(n) {
      n = (n + slides.length) % slides.length;
      if (n === cur) return;
      slides[cur].classList.remove("is-active"); slides[cur].setAttribute("inert", "");
      dots[cur].classList.remove("is-active"); dots[cur].removeAttribute("aria-current");
      cur = n;
      slides[cur].classList.add("is-active"); slides[cur].removeAttribute("inert");
      dots[cur].classList.add("is-active"); dots[cur].setAttribute("aria-current", "true");
      restart();
    }
    function restart() {
      clearTimeout(timer);
      if (bar) { bar.style.transition = "none"; bar.style.width = "0"; }
      if (reduce || paused) return;
      if (bar) { void bar.offsetWidth; bar.style.transition = "width " + ms + "ms linear"; bar.style.width = "100%"; }
      timer = setTimeout(function () { go(cur + 1); }, ms);
    }
    root.querySelector(".sl-next").addEventListener("click", function () { go(cur + 1); });
    root.querySelector(".sl-prev").addEventListener("click", function () { go(cur - 1); });
    dots.forEach(function (d) { d.addEventListener("click", function () { go(+d.getAttribute("data-go")); }); });
    // تتقلب الشرائح لوحدها دائما؛ تتوقف فقط إذا كانت الصفحة في الخلفية
    function pause(v) { paused = v; restart(); }
    document.addEventListener("visibilitychange", function () { pause(document.hidden); });
    root.addEventListener("keydown", function (e) {
      var fwd = lang === "ar" ? "ArrowLeft" : "ArrowRight", back = lang === "ar" ? "ArrowRight" : "ArrowLeft";
      if (e.key === fwd) go(cur + 1); else if (e.key === back) go(cur - 1);
    });
    // swipe on touch screens
    var x0 = null;
    root.addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    root.addEventListener("touchend", function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0; x0 = null;
      if (Math.abs(dx) < 45) return;
      var forward = lang === "ar" ? dx > 0 : dx < 0;
      go(cur + (forward ? 1 : -1));
    }, { passive: true });
    restart();
  }

  function about() {
    var vals = C.about.values.map(function (v) {
      return '<div class="value"><span class="value-ico">' + icon(v.icon) + "</span><div><h3>" + esc(v.title) + "</h3><p>" + esc(v.text) + "</p></div></div>";
    }).join("");
    var media = PH.about ? '<figure class="about-media">' + img(PH.about, C.about.title, "about-img") + '</figure>' : "";
    return '<section class="section" id="about"><div class="container about-grid">' + media + "<div>" +
      sectionHead(C.about.kicker, C.about.title) +
      C.about.text.map(function (p) { return '<p class="prose">' + rich(p) + "</p>"; }).join("") +
      '<div class="values">' + vals + "</div></div></div></section>";
  }

  function serviceCard(s, detailed) {
    var pts = detailed ? '<ul class="checks">' + s.points.map(function (p) { return "<li>" + icon("check") + "<span>" + esc(p) + "</span></li>"; }).join("") + "</ul>" : "";
    var act = detailed
      ? '<a class="btn btn-primary" href="' + link("contact.html") + "?service=" + s.id + '#request">' + esc(C.common.requestService) + "</a>"
      : '<a class="card-link" href="' + link("services.html") + "#" + s.id + '">' + esc(C.common.details) + icon("arrow", "flip") + "</a>";
    var media = s.img ? '<div class="svc-media">' + img(s.img, s.title) + "</div>" : "";
    return '<article class="svc-card' + (detailed ? " detailed" : "") + (s.img ? " has-media" : "") + '"' + (detailed ? ' id="' + s.id + '"' : "") + ">" + media +
      '<div class="svc-body"><span class="svc-ico">' + icon(s.icon) + "</span>" +
      "<h3>" + esc(s.title) + "</h3><p>" + esc(s.summary) + "</p>" + pts + '<div class="svc-act">' + act + "</div></div></article>";
  }

  function sector() {
    var S = C.sector;
    if (!S) return "";
    var pts = '<ul class="checks checks-light">' + S.points.map(function (p) { return "<li>" + icon("check") + "<span>" + esc(p) + "</span></li>"; }).join("") + "</ul>";
    var media = '<div class="sector-media">' + (PH.sector ? img(PH.sector, S.title, "sector-main") : "") + "</div>";
    return '<section class="section sector" id="sector"><div class="container sector-grid">' + media +
      '<div class="sector-copy">' + sectionHead(S.kicker, S.title) + '<p class="prose">' + rich(S.text) + "</p>" + pts +
      '<a class="btn btn-accent btn-lg" href="' + link("contact.html") + '?service=classification#request">' + icon("blueprint") + "<span>" + esc(S.cta) + "</span></a></div></div></section>";
  }

  function servicesSection() {
    return '<section class="section section-alt" id="services"><div class="container">' +
      sectionHead(C.services.kicker, C.services.title, C.services.intro, true) +
      '<div class="svc-grid">' + C.services.items.map(function (s) { return serviceCard(s, false); }).join("") + "</div>" +
      '<div class="center-row"><a class="btn btn-outline" href="' + link("services.html") + '">' + esc(C.common.allServices) + "</a></div></div></section>";
  }

  function process() {
    var steps = C.process.steps.map(function (s, i) {
      return '<li class="step"><span class="step-num">' + (i + 1) + "</span><h3>" + esc(s.title) + "</h3><p>" + esc(s.text) + "</p></li>";
    }).join("");
    return '<section class="section section-alt process-plain" id="process"><div class="container">' +
      sectionHead(C.process.kicker, C.process.title, "", true) + '<ol class="steps">' + steps + "</ol></div></section>";
  }

  function why() {
    var items = C.why.items.map(function (w) {
      return '<div class="why-item"><span class="why-ico">' + icon(w.icon) + "</span><h3>" + esc(w.title) + "</h3><p>" + esc(w.text) + "</p></div>";
    }).join("");
    var media = PH.why ? '<figure class="why-media">' + img(PH.why, C.common.location) + '<figcaption>' + icon("pin") + esc(C.common.location) + "</figcaption></figure>" : "";
    return '<section class="section" id="why"><div class="container">' + sectionHead(C.why.kicker, C.why.title, "", true) +
      '<div class="why-layout">' + media + '<div class="why-grid">' + items + "</div></div></div></section>";
  }

  function faq() {
    var items = C.faq.items.map(function (f, i) {
      return '<details class="faq-item"' + (i === 0 ? " open" : "") + "><summary><span>" + esc(f.q) + "</span>" + icon("plus") + "</summary><div class=\"faq-a\"><p>" + esc(f.a) + "</p></div></details>";
    }).join("");
    return '<section class="section section-alt" id="faq"><div class="container narrow">' + sectionHead(C.faq.kicker, C.faq.title, "", true) +
      '<div class="faq-list">' + items + "</div></div></section>";
  }

  function form() {
    var F = C.contact.form;
    var opts = C.services.items.map(function (s) { return '<option value="' + s.id + '">' + esc(s.title) + "</option>"; }).join("") +
      '<option value="other">' + esc(F.other) + "</option>";
    return '<form class="req-form" id="request" novalidate><h3>' + esc(F.title) + "</h3>" +
      '<div class="field"><label for="f-name">' + esc(F.name) + ' <span class="req">*</span></label><input id="f-name" name="name" type="text" autocomplete="name" placeholder="' + esc(F.namePh) + '" required><small class="err" id="e-name"></small></div>' +
      '<div class="field"><label for="f-phone">' + esc(F.phone) + ' <span class="req">*</span></label><input id="f-phone" name="phone" type="tel" dir="ltr" inputmode="tel" autocomplete="tel" placeholder="' + esc(F.phonePh) + '" required><small class="err" id="e-phone"></small></div>' +
      '<div class="field"><label for="f-service">' + esc(F.service) + ' <span class="req">*</span></label><select id="f-service" name="service" required><option value="">' + esc(F.servicePh) + "</option>" + opts + '</select><small class="err" id="e-service"></small></div>' +
      '<div class="field"><label for="f-details">' + esc(F.details) + '</label><textarea id="f-details" name="details" rows="4" maxlength="800" placeholder="' + esc(F.detailsPh) + '"></textarea></div>' +
      '<button class="btn btn-wa btn-lg btn-block" type="submit">' + WA_SVG + "<span>" + esc(F.submit) + "</span></button>" +
      '<p class="form-note">' + icon("lock") + esc(F.note) + '</p><p class="form-status" id="formStatus" role="status" aria-live="polite"></p></form>';
  }

  function contactSection(isPage) {
    return '<section class="section" id="contact"><div class="container contact-grid"><div>' +
      (isPage ? "" : sectionHead(C.contact.kicker, C.contact.title, C.contact.intro)) +
      (isPage ? '<p class="lead">' + esc(C.contact.intro) + "</p>" : "") +
      contactList() + "</div>" + form() + "</div></section>";
  }

  function ctaBand() {
    var media = PH.cta ? '<figure class="cta-media">' + img(PH.cta, C.cta.title) + "</figure>" : "";
    return '<section class="cta-band"><div class="container"><div class="cta-inner' + (media ? " has-media" : "") + '"><div class="cta-copy"><h2>' + esc(C.cta.title) + "</h2><p>" + esc(C.cta.text) + "</p>" +
      '<div class="cta-actions"><a class="btn btn-wa btn-lg" href="' + waLink() + '" target="_blank" rel="noopener">' + WA_SVG + "<span>" + esc(C.common.whatsapp) + "</span></a>" +
      '<a class="btn btn-ghost-light btn-lg" href="tel:' + CFG.phones[0].tel + '">' + icon("phone") + "<span>" + esc(C.common.call) + "</span></a></div></div>" + media + "</div></div></section>";
  }

  // مربعات استكشاف بصور كبيرة (بأسلوب BCG)
  function bento() {
    if (!PH.bentoMain) return "";
    function tile(cls, photoName, href, kicker, title, cta) {
      return '<a class="tile ' + cls + '" href="' + href + '">' + img(photoName, "", "tile-img") + '<span class="tile-shade" aria-hidden="true"></span>' +
        '<span class="tile-copy"><span class="tile-kicker">' + esc(kicker) + "</span><span class=\"tile-title\">" + esc(title) + "</span>" +
        '<span class="pill">' + esc(cta) + icon("arrow", "flip") + "</span></span></a>";
    }
    return '<section class="section bento-sec"><div class="container"><div class="bento">' +
      tile("tile-main", PH.bentoMain, link("services.html"), C.services.kicker, C.services.title, C.common.allServices) +
      tile("", PH.bentoSector, link("services.html") + "#classification", C.sector.kicker, C.sector.title, C.common.details) +
      tile("", PH.bentoContact, link("contact.html") + "#request", C.common.contactUs, C.cta.title, C.common.contactUs) +
      "</div></div></section>";
  }

  // شريط عريض لصورة اللوجو على الجدار
  function brandBand() {
    if (!PH.brand) return "";
    return '<section class="brand-band" aria-label="' + esc(C.brand.full) + '"><figure class="brand-band-media">' +
      img(PH.brand, C.brand.full + " - " + C.tagline, "brand-band-img") + "</figure></section>";
  }

  // الاستشارات الإدارية: صورة طولية ونص
  function advisory() {
    var A = C.advisory;
    if (!A) return "";
    var pts = '<ul class="checks">' + A.points.map(function (p) { return "<li>" + icon("check") + "<span>" + esc(p) + "</span></li>"; }).join("") + "</ul>";
    var media = PH.advisory ? '<figure class="advisory-media">' + img(PH.advisory, A.title) + "</figure>" : "";
    return '<section class="section advisory" id="advisory"><div class="container advisory-grid">' + media +
      '<div class="advisory-copy">' + sectionHead(A.kicker, A.title) + '<p class="prose">' + esc(A.text) + "</p>" + pts +
      '<a class="btn btn-primary btn-lg" href="' + waLink(A.waText) + '" target="_blank" rel="noopener">' + WA_SVG + "<span>" + esc(A.cta) + "</span></a></div></div></section>";
  }

  // شريط نطاق العمل: صورة عريضة وأسماء الإمارات
  function coverage() {
    var V = C.coverage;
    if (!V) return "";
    var chips = V.emirates.map(function (e) { return '<li>' + esc(e) + "</li>"; }).join("");
    return '<section class="coverage"><div class="container coverage-inner">' +
      '<span class="coverage-kicker">' + esc(V.kicker) + "</span><h2>" + esc(V.title) + "</h2><p>" + esc(V.text) + '</p><ul class="emirates">' + chips + "</ul></div></section>";
  }

  // جملة تعريفية عريضة في المنتصف (بأسلوب صفحات ماكنزي)
  function statement() {
    if (!C.statement) return "";
    return '<section class="statement"><div class="container"><span class="statement-kicker">' + esc(C.statement.kicker) + "</span><p>" + esc(C.statement.text) + "</p></div></section>";
  }

  function pageHero(title, intro, bg) {
    return '<section class="page-hero' + (bg ? " has-photo" : "") + '" id="top"' + bgStyle(bg) + '><div class="container"><h1>' + esc(title) + "</h1><p>" + esc(intro) + "</p></div></section>";
  }

  /* ---------- page assembly ---------- */
  var body = "";
  if (page === "home") {
    body = hero() + servicesSection() + advisory() + sector() + coverage() + process() + about() + why() + brandBand() + faq() + contactSection(false);
  } else if (page === "services") {
    body = pageHero(C.services.pageTitle, C.services.pageIntro, PH.pageServices) +
      '<section class="section"><div class="container"><div class="svc-grid detailed-grid">' +
      C.services.items.map(function (s) { return serviceCard(s, true); }).join("") + "</div></div></section>" +
      advisory() + sector() + coverage() + process() + brandBand() + ctaBand();
  } else if (page === "contact") {
    body = pageHero(C.contact.pageTitle, C.contact.pageIntro, PH.pageContact) + contactSection(true);
  } else {
    body = pageHero(C.notFound.title, C.notFound.text) +
      '<section class="section"><div class="container center-row"><a class="btn btn-primary btn-lg" href="' + link("index.html") + '">' + esc(C.notFound.back) + "</a></div></section>";
  }

  document.getElementById("app").innerHTML =
    '<a class="skip" href="#main">' + esc(C.common.skip) + "</a>" + header() + '<main id="main">' + body + "</main>" + footer();
  document.getElementById("yr").textContent = new Date().getFullYear();
  initSlider();

  /* ---------- behaviour ---------- */
  var hdr = document.getElementById("siteHeader");
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("mainNav");
  function closeNav() { hdr.classList.remove("nav-open"); toggle.setAttribute("aria-expanded", "false"); }
  toggle.addEventListener("click", function () {
    var open = hdr.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  nav.addEventListener("click", function (e) { if (e.target.closest("a")) closeNav(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeNav(); });
  function onScroll() { hdr.classList.toggle("scrolled", window.scrollY > 8); }
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();

  // re-apply hash scroll after render (content is injected by JS)
  if (location.hash) {
    var t = document.getElementById(location.hash.slice(1));
    if (t) setTimeout(function () { t.scrollIntoView(); }, 30);
  }

  // form → WhatsApp
  var f = document.getElementById("request");
  if (f) {
    var F = C.contact.form;
    var sel = document.getElementById("f-service");
    var pre = new URLSearchParams(location.search).get("service");
    if (pre && sel.querySelector('option[value="' + pre.replace(/[^a-z]/g, "") + '"]')) sel.value = pre;

    function setErr(id, msg) {
      var el = document.getElementById("e-" + id);
      el.textContent = msg || "";
      document.getElementById("f-" + id).setAttribute("aria-invalid", msg ? "true" : "false");
      return !msg;
    }
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = f.elements["name"].value.trim();
      var phone = f.elements["phone"].value.trim();
      var svc = sel.value;
      var details = f.elements["details"].value.trim();
      var digits = phone.replace(/[^\d]/g, "");
      var ok = setErr("name", name.length < 2 ? F.errName : "") &
        setErr("phone", (digits.length < 7 || digits.length > 15 || /[^\d\s+()\-]/.test(phone)) ? F.errPhone : "") &
        setErr("service", svc ? "" : F.errService);
      if (!ok) { var bad = f.querySelector('[aria-invalid="true"]'); if (bad) bad.focus(); return; }
      var svcName = sel.options[sel.selectedIndex].text;
      var msg = F.msgIntro + "\n\n" +
        F.msgName + ": " + name + "\n" +
        F.msgPhone + ": " + phone + "\n" +
        F.msgService + ": " + svcName +
        (details ? "\n" + F.msgDetails + ": " + details : "");
      var url = waLink(msg);
      var status = document.getElementById("formStatus");
      status.innerHTML = '<a href="' + url + '" target="_blank" rel="noopener">' + esc(F.opened) + "</a>";
      var w = window.open(url, "_blank");
      if (w) { try { w.opener = null; } catch (err) { /* ignore */ } }
      else window.location.href = url;
    });
  }
})();
