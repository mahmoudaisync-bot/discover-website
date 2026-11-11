/* =========================================================
   إعدادات الموقع الأساسية — عدل هنا الأرقام والبريد واللوجو
   Site settings — edit phone numbers, email and logo here
   ========================================================= */
window.SITE_CONFIG = {
  // رقم واتساب الرئيسي بالصيغة الدولية بدون + أو مسافات
  whatsapp: "971501810808",

  // أرقام الهاتف: display للعرض، tel للاتصال المباشر
  phones: [
    { display: "+971 50 181 0808", tel: "+971501810808", main: true },
    { display: "+971 52 776 7474", tel: "+971527767474" }
  ],

  email: "info.discoveruae@gmail.com",

  // اللوجو: النسخة الكحلية للخلفيات الفاتحة، والبيضاء للخلفيات الداكنة (الفوتر)
  // اتركهما فارغين "" لاستخدام الشعار النصي
  logoImage: "assets/img/logo.png",
  logoImageLight: "assets/img/logo-white.png",

  // صور الأقسام (داخل assets/img/photos). لتغيير صورة: ضع الصورة الجديدة في نفس الفولدر واكتب اسمها هنا
  // صور الخدمات محددة في content.js داخل كل خدمة (img)
  photos: {
    hero: "hero-abudhabi.jpg",          // خلفية الواجهة الرئيسية
    about: "about-signing.jpg",         // قسم من نحن
    sector: "sector-site.jpg",          // قسم المقاولات (الصورة الكبيرة)
    sectorInset: "sector-engineers.jpg",// قسم المقاولات (الصورة الصغيرة)
    process: "process-cranes.jpg",      // خلفية قسم كيف نعمل
    why: "why-etihad.jpg",              // قسم لماذا ديسكفر
    pageServices: "page-services.jpg",  // رأس صفحة الخدمات
    pageContact: "page-contact.jpg"     // رأس صفحة التواصل
  }
};
