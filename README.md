# موقع ديسكفر لحلول الأعمال

موقع ثابت (Static) ثنائي اللغة: العربية افتراضيا، والإنجليزية في فولدر `en`. لا يحتاج خادما ولا قاعدة بيانات.

## هيكل المشروع

```
discover-website/
├── index.html, services.html, contact.html      الصفحات العربية
├── en/index.html, en/services.html, en/contact.html   الصفحات الإنجليزية
├── 404.html                                      صفحة "غير موجودة"
├── assets/
│   ├── css/theme.css     الألوان والخطوط  ← عدل الألوان هنا
│   ├── css/style.css     التنسيق العام
│   ├── js/config.js      الأرقام والبريد واللوجو  ← عدل هنا
│   ├── js/content.js     كل نصوص الموقع عربي وإنجليزي  ← عدل هنا
│   ├── js/main.js        محرك العرض (لا يحتاج تعديلا)
│   └── img/              الأيقونة وصورة المشاركة
├── tools/                مصادر صورة المشاركة والأيقونة
├── robots.txt, sitemap.xml
└── README.md
```

## 1) تعديل النصوص
افتح `assets/js/content.js` بأي محرر نصوص (Notepad أو VS Code).
- القسم `ar:` للعربي، والقسم `en:` للإنجليزي.
- عدل النص بين علامتي التنصيص `" "` فقط، ولا تحذف الفواصل `,`.
- النص بين `**` و `**` يظهر بالخط العريض.
- لإضافة سؤال شائع: انسخ سطرا كاملا من `{ q: "...", a: "..." },` والصقه تحته وعدله.
- الخدمات في `services.items`؛ لكل خدمة عنوان وملخص ونقاط تفصيلية.

## 2) تعديل الأرقام والبريد
افتح `assets/js/config.js`:
- `whatsapp`: الرقم بالصيغة الدولية بدون + أو مسافات (مثل `971501810808`). يستخدم لزر واتساب العائم ونموذج الطلب.
- `phones`: `display` لطريقة العرض، و`tel` للاتصال المباشر.
- `email`: البريد الإلكتروني.

ملاحظة: الأرقام والبريد مكتوبة أيضا في بيانات Schema داخل `index.html` و`en/index.html` (ابحث عن `telephone`)؛ عدلها هناك أيضا عند التغيير.

## 3) تعديل الألوان
افتح `assets/css/theme.css` وغير القيم، مثل:
- `--c-primary` اللون الكحلي الأساسي (مأخوذ من اللوجو: `#03256b`)
- `--c-accent` اللون الذهبي
- `--c-teal` اللون المساعد

الخطوط في نفس الملف: العربي **Cairo**، والإنجليزي **Segoe UI** (يظهر على ويندوز، وعلى آيفون وأندرويد يظهر خط النظام المشابه لأن Segoe UI غير متاح للتضمين في المواقع).

## 4) اللوجو
- اللوجو المستخدم: `assets/img/logo.png` (كحلي للهيدر) و`assets/img/logo-white.png` (أبيض للفوتر)، ومحددان في `assets/js/config.js`.
- الملف الأصلي محفوظ في `tools/brand-source/logo-original.png`.
- لتحديث اللوجو: ضع الملف الجديد مكان `tools/brand-source/logo-original.png` (خلفية بيضاء ولون واحد)، ثم شغل من فولدر المشروع:
  ```
  powershell -ExecutionPolicy Bypass -File tools\process-logo.ps1
  ```
  ينتج النسخ الشفافة المقصوصة تلقائيا.
- أيقونة المتصفح: `assets/img/favicon.svg` و`assets/img/apple-touch-icon.png` (180×180، مصدرها `tools/icon.html`).
- صورة المشاركة في واتساب: `assets/img/og-image.png` (1200×630).

## 5) نشر التعديلات
الموقع منشور على GitHub Pages: https://mahmoudaisync-bot.github.io/discover-website/ (المستودع: https://github.com/mahmoudaisync-bot/discover-website). بعد أي تعديل:
- الطريقة الأسهل: افتح المستودع على github.com، ثم افتح الملف واضغط أيقونة القلم ✏️، عدل، ثم **Commit changes**. يتحدث الموقع خلال دقيقة أو اثنتين.
- أو من الجهاز داخل فولدر المشروع:
  ```
  git add -A
  git commit -m "Update content"
  git push
  ```

## 6) ربط نطاق خاص (مثل discoveruae.com)
1. اشتر النطاق من أي مسجل (مثل GoDaddy أو Namecheap أو مسجل إماراتي معتمد لنطاقات .ae).
2. في المستودع على GitHub: **Settings ← Pages ← Custom domain**، اكتب `www.discoveruae.com` واحفظ، ثم فعل **Enforce HTTPS** بعد التحقق.
3. في لوحة إعدادات DNS لدى المسجل أضف:
   - سجل `CNAME`: الاسم `www` ويشير إلى `mahmoudaisync-bot.github.io`
   - أربعة سجلات `A` للاسم `@`: `185.199.108.153` و`185.199.109.153` و`185.199.110.153` و`185.199.111.153`
4. بعد الربط استبدل الرابط القديم بالجديد في كل ملفات `.html` و`sitemap.xml` و`robots.txt` (ابحث واستبدل في VS Code: Ctrl+Shift+H).

## 7) معاينة الموقع على جهازك
داخل فولدر المشروع:
```
python -m http.server 8000
```
ثم افتح `http://localhost:8000`.

## 8) إعادة توليد صورة المشاركة
عدل `tools/og-image.html` ثم شغل (PowerShell):
```
& "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --headless=new --hide-scrollbars --window-size=1200,630 --screenshot="$PWD\assets\img\og-image.png" "file:///$PWD/tools/og-image.html"
```
تحتفظ تطبيقات مثل واتساب بالصورة القديمة مؤقتا؛ قد يستغرق ظهور الصورة الجديدة بعض الوقت.
