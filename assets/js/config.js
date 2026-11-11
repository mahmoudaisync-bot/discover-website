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

  // شكل اللوجو في الهيدر والفوتر:
  //   "compact" = أيقونة دائرية + اسم DISCOVER (الشكل الحالي)
  //   "image"   = صورة اللوجو الكاملة (logoImage / logoImageLight)
  logoStyle: "compact",
  logoWord: "DISCOVER",
  logoImage: "assets/img/logo.png",
  logoImageLight: "assets/img/logo-white.png",

  // صور الأقسام (داخل assets/img/photos). لتغيير صورة: ضع الصورة الجديدة في نفس الفولدر واكتب اسمها هنا
  // صور السلايدر في content.js (slides)، وصور الخدمات في content.js داخل كل خدمة (img)
  photos: {
    about: "about-consultants.jpg",          // قسم من نحن
    sector: "sector-site-aerial.jpg",        // قسم المقاولات والاستشارات الهندسية
    process: "process-skyline-bw.jpg",       // خلفية قسم كيف نعمل
    why: "why-abudhabi-aerial.jpg",         // قسم لماذا ديسكفر
    brand: "brand-wall.jpg",                 // شريط اللوجو العريض (بين الأقسام)
    pageServices: "page-services-meeting.jpg", // رأس صفحة الخدمات
    pageContact: "page-contact-consult.jpg",  // رأس صفحة التواصل
    bentoMain: "bento-team.jpg",             // مربعات الاستكشاف: الكبير
    bentoSector: "bento-building.jpg",       // مربعات الاستكشاف: المقاولات
    bentoContact: "bento-documents.jpg",     // مربعات الاستكشاف: التواصل
    cta: "cta-analysis.jpg"                  // صورة شريط "جاهز لبدء معاملتك؟"
  },

  // السلايدر: مدة عرض كل شريحة بالملي ثانية
  slideInterval: 4000
};
