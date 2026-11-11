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
  logoStyle: "image",
  logoBadge: false,                         // أيقونة البحث الدائرية الصغيرة بجانب اللوجو
  logoWord: "DISCOVER",
  logoImage: "assets/img/logo-dbs-word.png",          // لوجو الهيدر (DISCOVER فقط)
  logoImageLight: "assets/img/logo-dbs-word-white.png", // لوجو الفوتر (أبيض)

  // صور الأقسام (داخل assets/img/photos). لتغيير صورة: ضع الصورة الجديدة في نفس الفولدر واكتب اسمها هنا
  // صور السلايدر في content.js (slides)، وصور الخدمات في content.js داخل كل خدمة (img)
  photos: {
    about: "about-consultants.jpg",          // قسم من نحن
    sector: "sector-building.jpg",           // قسم المقاولات والاستشارات الهندسية (صفحة الخدمات)
    process: "process-site-aerial.jpg",      // خلفية قسم كيف نعمل
    advisory: "advisory-consultation.jpg",
    sectorCard: "sector-building.jpg",       // بطاقة المقاولات في الرئيسية
    processCard: "bento-documents.jpg",      // بطاقة كيف نعمل في الرئيسية         // قسم الاستشارات الإدارية
    coverage: "process-skyline-bw.jpg",      // شريط نطاق العمل (جميع الإمارات)
    why: "why-abudhabi-aerial.jpg",         // قسم لماذا ديسكفر
    brand: "brand-wall.jpg",                 // شريط اللوجو العريض (بين الأقسام)
    pageServices: "page-services-meeting.jpg", // رأس صفحة الخدمات
    pageContact: "page-contact-consult.jpg",  // رأس صفحة التواصل
    bentoMain: "bento-team.jpg",             // مربعات الاستكشاف: الكبير
    bentoSector: "bento-building.jpg",       // مربعات الاستكشاف: المقاولات
    bentoContact: "bento-documents.jpg",     // مربعات الاستكشاف: التواصل
    cta: "cta-analysis.jpg"                  // صورة شريط "جاهز لبدء معاملتك؟"
  },

  // شكل الواجهة: "fixed" واجهة ثابتة بصورة واحدة، أو "slider" للسلايدر
  heroStyle: "slider",
  heroImage: "s1-uae-fort.jpg",

  // السلايدر: مدة عرض كل شريحة بالملي ثانية
  slideInterval: 12000,
  // عدد الشرائح المعروضة (من أول القائمة في content.js)
  slideCount: 3,

  // دمج "من نحن" و"الاستشارات الإدارية" في قسم واحد بالرئيسية (false يرجع القسمين منفصلين)
  mergeAboutAdvisory: true
};
