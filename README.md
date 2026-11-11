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

### وسم رسائل واتساب
كل رسالة واتساب تخرج من الموقع (الزر العائم، أزرار التواصل، نموذج الطلب) تبدأ بسطر `[رسالة من الموقع الإلكتروني]` (وفي الصفحات الإنجليزية `[Website Message]`) لتعرف أن العميل قادم من الموقع. لتغيير الوسم أو التحية الافتراضية: عدل `waTag` و`waGreeting` في `assets/js/content.js`.

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
- الشكل الحالي في الهيدر والفوتر **مختصر**: أيقونة دائرية (العدسة) + كلمة DISCOVER. للرجوع إلى صورة اللوجو الكاملة اكتب في `config.js`: `logoStyle: "image"`.
- اللوجو المستخدم: `assets/img/logo.png` (كحلي للهيدر) و`assets/img/logo-white.png` (أبيض للفوتر)، ومحددان في `assets/js/config.js`.
- الملف الأصلي محفوظ في `tools/brand-source/logo-original.png`.
- لتحديث اللوجو: ضع الملف الجديد مكان `tools/brand-source/logo-original.png` (خلفية بيضاء ولون واحد)، ثم شغل من فولدر المشروع:
  ```
  powershell -ExecutionPolicy Bypass -File tools\process-logo.ps1
  ```
  ينتج النسخ الشفافة المقصوصة تلقائيا.
- أيقونة المتصفح: `assets/img/favicon.svg` و`assets/img/apple-touch-icon.png` (180×180، مصدرها `tools/icon.html`).
- صورة المشاركة في واتساب: `assets/img/og-image-v2.jpg` (1200×630).

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
& "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --headless=new --hide-scrollbars --window-size=1200,630 --screenshot="$PWD\assets\img\og-image-v2.jpg" "file:///$PWD/tools/og-image.html"
```
تحتفظ تطبيقات مثل واتساب بالصورة القديمة مؤقتا؛ قد يستغرق ظهور الصورة الجديدة بعض الوقت.

## 9) الصور والسلايدر
- كل صور الموقع في `assets/img/photos/`. أغلبها من **Pexels** وصورتان من **Unsplash**، وكلاهما برخصة مجانية للاستخدام التجاري ولا تشترط ذكر المصور.
- **السلايدر** في أعلى الصفحة الرئيسية: شرائحه في `assets/js/content.js` داخل `slides` (لكل لغة). كل شريحة لها صورة وعنوان صغير وعنوان رئيسي ونص وزر تفاصيل. لإضافة شريحة انسخ سطرا كاملا وعدله. مدة عرض كل شريحة في `config.js` (`slideInterval`).
- صور الأقسام في `assets/js/config.js` داخل `photos`، وصور بطاقات الخدمات في `content.js` (الحقل `img` لكل خدمة).
- لتغيير صورة: ضع الصورة الجديدة (JPG، عرض 1600-1920 بكسل للسلايدر، وحجم أقل من 400 كيلوبايت) في نفس الفولدر واكتب اسمها مكان القديم.

| الملف | المصدر |
|---|---|
| slide-1-abudhabi.jpg | pexels.com/photo/19965889 |
| slide-2-formation.jpg | pexels.com/photo/5816300 |
| slide-3-classification.jpg | pexels.com/photo/8961146 |
| slide-4-government.jpg | pexels.com/photo/7580766 |
| slide-5-representation.jpg | pexels.com/photo/7433847 |
| about-team.jpg | pexels.com/photo/7693692 |
| card-formation.jpg | pexels.com/photo/8837510 |
| card-licensing.jpg | pexels.com/photo/7841410 |
| card-classification.jpg | pexels.com/photo/7937367 |
| card-government.jpg | pexels.com/photo/28448972 |
| card-representation.jpg | pexels.com/photo/13111211 |
| card-documents.jpg | pexels.com/photo/8815843 |
| sector-engineers-site.jpg | pexels.com/photo/8961065 |
| process-site-aerial.jpg | pexels.com/photo/4170184 |
| page-services-boardroom.jpg | pexels.com/photo/6949865 |
| why-etihad.jpg | unsplash.com (photo-1734009775179-07f428483783) |
| page-contact.jpg | unsplash.com (photo-1624317937315-0ced8736c9e9) |
