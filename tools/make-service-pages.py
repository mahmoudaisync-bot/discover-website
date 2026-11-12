# -*- coding: utf-8 -*-
"""
ينشئ صفحات الخدمات التفصيلية (service-<slug>.html) بالعربي والإنجليزي من assets/js/subservices.js
ويحدث sitemap.xml. شغله بعد إضافة خدمة أو تعديل عنوانها أو وصفها، ثم شغل prerender.ps1.
الاستخدام:  python tools/make-service-pages.py
"""
import json, os, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITE = "https://discoverbusinessuae.com/"


def load_sub():
    src = open(os.path.join(ROOT, "assets/js/subservices.js"), encoding="utf-8").read()
    body = src[src.index("window.SITE_SUB =") + len("window.SITE_SUB ="):].strip().rstrip(";")
    # تحويل كائن JavaScript إلى JSON: مفاتيح بلا علامات تنصيص
    body = re.sub(r'(?m)^(\s*)([A-Za-z_][A-Za-z0-9_]*):', r'\1"\2":', body)
    body = re.sub(r'([{,]\s*)([A-Za-z_][A-Za-z0-9_]*):\s', r'\1"\2": ', body)
    body = re.sub(r",(\s*[}\]])", r"\1", body)
    return json.loads(body)


def esc(s):
    return (s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;"))


def build(lang, tpl_path, out_dir, items, brand):
    tpl = open(tpl_path, encoding="utf-8").read()
    for x in items:
        fn = "service-%s.html" % x["slug"]
        ar_url = SITE + fn
        en_url = SITE + "en/" + fn
        url = ar_url if lang == "ar" else en_url
        title = "%s | %s" % (x["title"], brand)
        desc = x["summary"]
        h = tpl
        h = re.sub(r"<title>.*?</title>", "<title>%s</title>" % esc(title), h, flags=re.S)
        h = re.sub(r'(<meta name="description" content=")[^"]*', r"\g<1>" + esc(desc).replace("\\", "\\\\"), h)
        h = re.sub(r'(<link rel="canonical" href=")[^"]*', r"\g<1>" + url, h)
        h = re.sub(r'(<link rel="alternate" hreflang="ar" href=")[^"]*', r"\g<1>" + ar_url, h)
        h = re.sub(r'(<link rel="alternate" hreflang="en" href=")[^"]*', r"\g<1>" + en_url, h)
        h = re.sub(r'(<link rel="alternate" hreflang="x-default" href=")[^"]*', r"\g<1>" + ar_url, h)
        h = re.sub(r'(<meta property="og:url" content=")[^"]*', r"\g<1>" + url, h)
        for k in ('<meta property="og:title" content="', '<meta name="twitter:title" content="'):
            h = re.sub("(" + re.escape(k) + ')[^"]*', r"\g<1>" + esc(title).replace("\\", "\\\\"), h)
        for k in ('<meta property="og:description" content="', '<meta name="twitter:description" content="'):
            h = re.sub("(" + re.escape(k) + ')[^"]*', r"\g<1>" + esc(desc).replace("\\", "\\\\"), h)
        h = h.replace('data-page="services"', 'data-page="sub" data-sub="%s"' % x["slug"])
        # المحتوى يعاد توليده بواسطة prerender.ps1
        h = re.sub(r'(?s)<div id="app">.*?</div>(?=\s*<script src="[^"]*config\.js)', '<div id="app"></div>', h)
        open(os.path.join(out_dir, fn), "w", encoding="utf-8", newline="\n").write(h)
        print(os.path.relpath(os.path.join(out_dir, fn), ROOT))


def sitemap(slugs):
    pages = ["", "services.html", "contact.html"] + ["service-%s.html" % s for s in slugs]
    rows = []
    for p in pages:
        ar = SITE + p
        en = SITE + "en/" + p
        alt = '<xhtml:link rel="alternate" hreflang="ar" href="%s"/><xhtml:link rel="alternate" hreflang="en" href="%s"/>' % (ar, en)
        rows.append("  <url><loc>%s</loc>%s</url>" % (ar, alt))
        rows.append("  <url><loc>%s</loc>%s</url>" % (en, alt))
    xml = ('<?xml version="1.0" encoding="UTF-8"?>\n'
           '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n'
           + "\n".join(rows) + "\n</urlset>\n")
    open(os.path.join(ROOT, "sitemap.xml"), "w", encoding="utf-8", newline="\n").write(xml)


if __name__ == "__main__":
    data = load_sub()
    build("ar", os.path.join(ROOT, "services.html"), ROOT, data["ar"]["items"], "ديسكفر لحلول الأعمال")
    build("en", os.path.join(ROOT, "en/services.html"), os.path.join(ROOT, "en"), data["en"]["items"], "Discover Business Solutions")
    sitemap([x["slug"] for x in data["ar"]["items"]])
    print("sitemap.xml updated")
