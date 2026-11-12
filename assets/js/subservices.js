/* =========================================================
   الخدمات التفصيلية: كل خدمة لها صفحة مستقلة (service-<slug>.html)
   لا تظهر في الرئيسية، وتظهر من صفحة الخدمات تحت الخدمة الرئيسية التابعة لها.
   parent = معرف الخدمة الرئيسية في content.js
   ملاحظة: النصوص عامة ولا تتضمن مددا أو رسوما أو وعودا بنتائج، وتراجع من محمود قبل التوسع.
   ========================================================= */
window.SITE_SUB = {
  ar: {
    labels: {
      includes: "ماذا تشمل الخدمة؟",
      what: "ما هي الخدمة؟",
      handle: "ما الذي نتولاه عنك",
      docs: "مستندات مبدئية",
      docsNote: "قائمة مبدئية للاسترشاد؛ تحدد الجهة المختصة المستندات النهائية بحسب النشاط والشكل القانوني والإمارة.",
      related: "خدمات ذات صلة",
      request: "اطلب الخدمة الآن",
      requestText: "أرسل طلبك عبر واتساب، ونوضح لك المتطلبات والخطوات قبل البدء.",
      services: "الخدمات",
      waPrefix: "مرحبا، أرغب في الاستفسار عن خدمة: "
    },
    items: [
      {
        slug: "mainland-company-formation", parent: "formation",
        title: "تأسيس الشركات المحلية",
        summary: "تأسيس شركتك في البر الرئيسي للدولة، من اختيار النشاط والشكل القانوني إلى استلام الرخصة التجارية.",
        what: "تأسيس الشركة المحلية هو تسجيل شركتك لدى دائرة التنمية الاقتصادية في الإمارة المختارة، لتمارس نشاطها داخل الدولة بشكل نظامي. تتعدد الأشكال القانونية المتاحة، مثل **الشركة ذات المسؤولية المحدودة** و**شركة الشخص الواحد** و**المؤسسة الفردية** و**الشركة المدنية**، ويتوقف اختيار الأنسب منها على النشاط وعدد الشركاء وطبيعة العمل.",
        handle: [
          ["اختيار النشاط والشكل القانوني", "ندرس طبيعة عملك ونوضح لك الخيارات المتاحة وما يناسبها."],
          ["حجز الاسم التجاري والموافقات المبدئية", "نتقدم بطلب حجز الاسم والموافقة المبدئية لدى الجهة المختصة."],
          ["عقد التأسيس والتوثيق", "نجهز عقد التأسيس ونتابع توثيقه بحسب متطلبات الإمارة."],
          ["استلام الرخصة", "نتابع استكمال المتطلبات حتى إصدار الرخصة التجارية."]
        ],
        docs: ["صورة جواز سفر ساري المفعول لكل شريك", "صورة الهوية الإماراتية للمقيمين", "صورة شخصية حديثة", "مقترحات الاسم التجاري والنشاط المطلوب", "عقد إيجار أو عنوان للمقر عند الطلب"]
      },
      {
        slug: "foreign-gcc-branch", parent: "formation",
        title: "تأسيس فروع الشركات الأجنبية والخليجية",
        summary: "فتح فرع في الدولة لشركة قائمة خارجها، خليجية كانت أو أجنبية، مع متابعة الإجراءات حتى إصدار رخصة الفرع.",
        what: "تتيح الأنظمة للشركات المسجلة خارج الدولة فتح فروع لها داخلها، لتمارس النشاط باسم الشركة الأم ووفق نشاطها المسجل. وتختلف المتطلبات بين **فروع الشركات الخليجية** و**فروع الشركات الأجنبية**، وبحسب الإمارة والنشاط، وتشمل عادة تصديق مستندات الشركة الأم وتعيين مدير للفرع. نوضح لك المسار المناسب ونتولى الإجراءات حتى إصدار الرخصة.",
        handle: [
          ["تحديد المسار", "نوضح لك متطلبات الفرع بحسب جنسية الشركة الأم والنشاط والإمارة."],
          ["تجهيز مستندات الشركة الأم", "نحدد المستندات المطلوب تصديقها وترجمتها ونتابع اكتمالها."],
          ["تعيين مدير الفرع", "نجهز قرار تعيين المدير والوكالة اللازمة له."],
          ["إصدار الرخصة", "نتقدم بالطلب ونتابعه حتى إصدار رخصة الفرع."]
        ],
        docs: ["شهادة تسجيل الشركة الأم مصدقة", "عقد التأسيس والنظام الأساسي للشركة الأم مصدقين", "قرار مجلس الإدارة أو الشركاء بفتح الفرع وتعيين مديره", "صورة جواز سفر مدير الفرع", "ترجمة قانونية للمستندات غير العربية"]
      },
      {
        slug: "freezone-company-formation", parent: "formation",
        title: "تأسيس الشركات في المناطق الحرة",
        summary: "تأسيس شركتك في المنطقة الحرة المناسبة لنشاطك، مع توضيح الفروق بينها وبين البر الرئيسي.",
        what: "تضم الدولة عددا كبيرا من المناطق الحرة، ولكل منطقة أنشطتها وشروطها وباقات المقرات الخاصة بها. يناسب هذا الخيار كثيرا من الأنشطة، خاصة التي تتعامل مع خارج الدولة. نساعدك على المقارنة بين المناطق الحرة والبر الرئيسي، واختيار المنطقة التي تناسب نشاطك وخطتك.",
        handle: [
          ["المقارنة بين المناطق الحرة", "نوضح لك الفروق في الأنشطة والمقرات ومتطلبات كل منطقة."],
          ["تجهيز الطلب", "نجهز نموذج الطلب والمستندات وفق متطلبات المنطقة المختارة."],
          ["المتابعة حتى الإصدار", "نتابع الطلب مع إدارة المنطقة الحرة حتى إصدار الرخصة."],
          ["ما بعد التأسيس", "نساعدك في التأشيرات وفتح الحساب البنكي عند الحاجة."]
        ],
        docs: ["صورة جواز سفر ساري المفعول لكل شريك", "صورة شخصية حديثة", "مقترحات الاسم التجاري والنشاط", "بيانات التواصل والعنوان", "مستندات إضافية تطلبها المنطقة الحرة بحسب النشاط"]
      },
      {
        slug: "virtual-license", parent: "formation",
        title: "الرخص الافتراضية",
        summary: "رخص تتيح ممارسة بعض الأنشطة دون الحاجة إلى مقر فعلي، وفق شروط الجهة المصدرة.",
        what: "توفر بعض الجهات المصدرة للرخص في الدولة رخصا افتراضية أو رخصا بمقرات مرنة لأنشطة محددة، وتختلف شروطها من جهة إلى أخرى، وقد يتاح بعضها لغير المقيمين. نوضح لك الخيارات المتاحة لنشاطك، والقيود المرتبطة بكل خيار، قبل التقديم.",
        handle: [
          ["التحقق من ملاءمة النشاط", "نتأكد من إتاحة نشاطك ضمن هذا النوع من الرخص."],
          ["عرض الخيارات", "نقارن لك بين الجهات المصدرة وشروط كل منها."],
          ["تقديم الطلب", "نجهز المستندات ونتابع الطلب حتى الإصدار."],
          ["التجديد", "نذكرك بموعد التجديد ونتولى إجراءاته عند الطلب."]
        ],
        docs: ["صورة جواز سفر ساري المفعول", "صورة شخصية حديثة", "إثبات عنوان السكن", "النشاط المطلوب ومقترح الاسم التجاري"]
      },
      {
        slug: "local-service-agent", parent: "representation",
        title: "الوكيل المحلي الإماراتي",
        summary: "ترتيب تعيين وكيل خدمات محلي مواطن للأنشطة والأشكال القانونية التي تشترط ذلك.",
        what: "تشترط الجهات المختصة في بعض الأنشطة والأشكال القانونية، خاصة بعض الأنشطة المهنية المملوكة بالكامل لغير المواطنين، تعيين **وكيل خدمات محلي** من مواطني الدولة. يتولى الوكيل تمثيل المنشأة أمام الجهات الحكومية في حدود الاتفاق، ولا يكون شريكا في رأس المال. نساعدك في التحقق من الحاجة إليه وترتيب الاتفاقية وتوثيقها.",
        handle: [
          ["التحقق من الاشتراط", "نتأكد مما إذا كان نشاطك وشكلك القانوني يتطلبان وكيلا محليا."],
          ["ترتيب التعيين", "نساعدك في ترتيب تعيين الوكيل وفق الإجراءات المعتمدة."],
          ["اتفاقية الوكالة", "نجهز اتفاقية وكيل الخدمات ونتابع توثيقها."],
          ["المتابعة", "نتابع أي تعديلات لاحقة على الاتفاقية عند الحاجة."]
        ],
        docs: ["صورة جواز سفر صاحب المنشأة", "صورة الهوية الإماراتية إن وجدت", "بيانات النشاط والرخصة أو الطلب المبدئي"]
      },
      {
        slug: "business-license-amendment", parent: "licensing",
        title: "تعديل رخص الأعمال",
        summary: "إضافة أو حذف نشاط، تغيير الشركاء أو المدير، تعديل الاسم التجاري أو العنوان.",
        what: "تحتاج الشركة إلى تعديل رخصتها عند حدوث تغيير في بياناتها، مثل إضافة نشاط أو حذفه، أو دخول شريك أو خروجه، أو تعيين مدير جديد، أو تغيير الاسم التجاري أو المقر. نتولى تجهيز ملف التعديل والمستندات المطلوبة ومتابعته مع الجهة المختصة، مع تجهيز القرارات وملاحق العقود عند الحاجة.",
        handle: [
          ["تحديد نوع التعديل", "نحدد الإجراء المطلوب والمستندات الخاصة بكل تعديل."],
          ["تجهيز القرارات والملاحق", "نجهز قرار الشركاء أو ملحق عقد التأسيس عند الحاجة."],
          ["تقديم الطلب ومتابعته", "نتقدم بطلب التعديل ونتابعه حتى اعتماده."],
          ["تحديث البيانات", "نتابع انعكاس التعديل على الرخصة والجهات المرتبطة بها."]
        ],
        docs: ["نسخة من الرخصة التجارية الحالية", "عقد التأسيس وملاحقه", "صور جوازات وهويات الأطراف المعنية بالتعديل", "قرار الشركاء عند الحاجة"]
      },
      {
        slug: "trademark-registration", parent: "licensing",
        title: "تسجيل العلامة التجارية",
        summary: "حماية اسم نشاطك وشعارك بتسجيل العلامة التجارية لدى الجهة المختصة في الدولة.",
        what: "تسجيل العلامة التجارية يمنح صاحبها حقا قانونيا في استخدامها داخل الدولة ضمن الفئات المسجلة، ويحميها من الاستخدام غير المصرح به. نساعدك في تحديد الفئات المناسبة لنشاطك، والتحقق المبدئي من العلامات المشابهة، وتقديم الطلب ومتابعته لدى الجهة الاتحادية المختصة.",
        handle: [
          ["تحديد الفئات", "نحدد فئات التسجيل التي تناسب منتجاتك أو خدماتك."],
          ["البحث المبدئي", "نراجع مبدئيا وجود علامات مشابهة قبل التقديم."],
          ["تقديم الطلب", "نجهز الطلب ونرفقه بنموذج العلامة والمستندات المطلوبة."],
          ["المتابعة", "نتابع مراحل الطلب ونبلغك بأي ملاحظات من الجهة المختصة."]
        ],
        docs: ["نموذج العلامة (الشعار أو الاسم) بصيغة واضحة", "نسخة من الرخصة التجارية أو جواز السفر لصاحب الطلب", "قائمة المنتجات أو الخدمات المراد حمايتها", "وكالة للتقديم عند الحاجة"]
      },
      {
        slug: "visa-processing", parent: "government",
        title: "استخراج التأشيرات",
        summary: "إجراءات تأشيرات الإقامة للشركاء والموظفين وأفراد الأسرة، من الطلب حتى الإصدار.",
        what: "تشمل الخدمة إجراءات تأشيرات الإقامة المرتبطة بالشركة، مثل تأشيرات الشركاء والمستثمرين والموظفين، وإقامات أفراد الأسرة. نتولى تجهيز الطلبات ومتابعتها مع الجهات المختصة، وتنسيق مواعيد الفحص الطبي والبصمة، حتى صدور الإقامة والهوية الإماراتية.",
        handle: [
          ["تحديد نوع التأشيرة", "نوضح لك نوع التأشيرة المناسب لكل حالة ومتطلباتها."],
          ["تجهيز الطلبات", "نجهز الطلبات والمستندات ونتابعها مع الجهات المختصة."],
          ["الفحص الطبي والبصمة", "ننسق المواعيد المطلوبة ونبلغك بها مسبقا."],
          ["الإصدار والتجديد", "نتابع حتى الإصدار، ونذكرك بمواعيد التجديد."]
        ],
        docs: ["صورة جواز سفر ساري المفعول", "صورة شخصية حديثة بخلفية بيضاء", "نسخة من الرخصة التجارية للشركة الكفيلة", "مستندات إضافية بحسب نوع التأشيرة (عقد عمل أو عقد زواج أو شهادات ميلاد)"]
      },
      {
        slug: "visa-status-change", parent: "government",
        title: "تعديل وضع التأشيرة",
        summary: "تعديل وضع المقيم أو الزائر داخل الدولة دون الحاجة إلى المغادرة، حيث يسمح النظام بذلك.",
        what: "يتيح تعديل الوضع نقل حامل التأشيرة من وضع إلى آخر وهو داخل الدولة، مثل الانتقال من تأشيرة زيارة إلى إقامة، أو نقل الإقامة إلى جهة جديدة، في الحالات التي تسمح بها الأنظمة. نراجع حالتك ونوضح لك الإجراء المتاح ونتابعه حتى اكتماله.",
        handle: [
          ["مراجعة الحالة", "نراجع نوع التأشيرة الحالية والوضع المطلوب."],
          ["تحديد الإجراء", "نوضح لك ما إذا كان التعديل متاحا داخل الدولة ومتطلباته."],
          ["تقديم الطلب", "نجهز الطلب والمستندات ونتابعه مع الجهة المختصة."],
          ["استكمال الإقامة", "نتابع الخطوات التالية حتى صدور الإقامة الجديدة."]
        ],
        docs: ["صورة جواز السفر", "صورة التأشيرة أو الإقامة الحالية", "صورة شخصية حديثة", "مستندات الجهة الكفيلة الجديدة"]
      },
      {
        slug: "pro-services", parent: "government",
        title: "خدمات مسؤول العلاقات العامة (PRO)",
        summary: "إنجاز معاملات شركتك لدى الجهات الحكومية بشكل مستمر، دون الحاجة إلى موظف متفرغ.",
        what: "تحتاج الشركات إلى متابعة مستمرة لمعاملاتها الحكومية، من تجديد الرخص والإقامات إلى ملفات العمال والتصاريح والمراسلات الرسمية. نعمل بصفة **مسؤول علاقات عامة** لشركتك، ونتابع هذه المعاملات ومواعيدها نيابة عنك، لتتفرغ لإدارة أعمالك.",
        handle: [
          ["تجديد الرخص والإقامات", "نتابع مواعيد التجديد ونتولى إجراءاتها قبل انتهائها."],
          ["ملفات العمال", "نتابع إجراءات عقود العمل وتصاريحها لدى الجهات المعنية."],
          ["المعاملات الحكومية", "ننجز المعاملات والطلبات لدى الدوائر والجهات المختصة."],
          ["التنبيه بالمواعيد", "ننبهك بالمستندات القريبة من الانتهاء قبل وقت كاف."]
        ],
        docs: ["نسخة من الرخصة التجارية", "بطاقة المنشأة إن وجدت", "وكالة أو تفويض للمتابعة عند الحاجة", "المستندات الخاصة بكل معاملة"]
      },
      {
        slug: "bank-account-opening", parent: "government",
        title: "فتح الحسابات البنكية",
        summary: "تجهيز ملف فتح الحساب البنكي للشركة والتنسيق مع البنك حتى صدور القرار.",
        what: "يتطلب فتح حساب بنكي للشركة ملفا مكتملا يوضح نشاطها وملاكها ومصادر أموالها. نساعدك في تجهيز الملف وفق متطلبات البنك، والتنسيق مع البنوك المناسبة لنشاطك، ومتابعة الطلب. يبقى قرار قبول فتح الحساب من صلاحية البنك وحده.",
        handle: [
          ["اختيار البنك", "نساعدك في اختيار البنوك المناسبة لطبيعة نشاطك."],
          ["تجهيز الملف", "نجهز ملف الشركة والمستندات الداعمة وفق متطلبات البنك."],
          ["التنسيق", "ننسق المواعيد والمقابلات المطلوبة مع البنك."],
          ["المتابعة", "نتابع الطلب ونبلغك بأي مستندات إضافية يطلبها البنك."]
        ],
        docs: ["نسخة من الرخصة التجارية", "عقد التأسيس وشهادة السجل", "صور جوازات وهويات الشركاء والمفوضين بالتوقيع", "عقد الإيجار أو إثبات المقر", "نبذة عن النشاط والعملاء والموردين المتوقعين"]
      },
      {
        slug: "business-plan", parent: "documents",
        title: "خطة العمل",
        summary: "إعداد خطة عمل واضحة لمشروعك، للتقديم إلى الجهات أو البنوك أو الشركاء.",
        what: "خطة العمل وثيقة توضح فكرة المشروع وسوقه المستهدف وطريقة تشغيله وتوقعاته المالية. تحتاجها عند التقدم إلى بعض الجهات أو البنوك، أو عند عرض المشروع على شركاء وممولين، كما تساعدك على اتخاذ قرار البدء على أساس واضح. نعد الخطة بالتعاون معك وبناء على بياناتك الفعلية.",
        handle: [
          ["فهم المشروع", "نجمع منك تفاصيل الفكرة والسوق والتكاليف المتوقعة."],
          ["دراسة السوق", "نعد قسما عن السوق والمنافسين والعملاء المستهدفين."],
          ["التوقعات المالية", "نعد جداول التكاليف والإيرادات المتوقعة بناء على بياناتك."],
          ["الصياغة النهائية", "نسلمك خطة منظمة جاهزة للتقديم أو العرض."]
        ],
        docs: ["وصف فكرة المشروع ونشاطه", "التكاليف المتوقعة للتأسيس والتشغيل", "الأسعار والإيرادات المتوقعة", "بيانات الشركاء وخبراتهم"]
      }
    ]
  },
  en: {
    labels: {
      includes: "What does the service include?",
      what: "What is the service?",
      handle: "What we handle for you",
      docs: "Initial documents",
      docsNote: "An initial guide only; the competent authority sets the final documents based on the activity, legal form and emirate.",
      related: "Related services",
      request: "Request the service",
      requestText: "Send your request on WhatsApp and we will explain the requirements and steps before we start.",
      services: "Services",
      waPrefix: "Hello, I would like to ask about: "
    },
    items: [
      {
        slug: "mainland-company-formation", parent: "formation",
        title: "Mainland Company Formation",
        summary: "Set up your company on the UAE mainland, from choosing the activity and legal form to receiving the trade license.",
        what: "Mainland formation registers your company with the economic development department of the chosen emirate, so it can operate inside the UAE. Several legal forms are available, such as the **limited liability company**, the **one-person company**, the **sole establishment** and the **civil company**. The right choice depends on your activity, the number of partners and how you plan to work.",
        handle: [
          ["Activity and legal form", "We review your business and explain the available options."],
          ["Trade name and initial approval", "We reserve the name and apply for initial approval with the authority."],
          ["Memorandum and notarization", "We prepare the memorandum of association and follow its notarization as required."],
          ["Trade license", "We follow the remaining requirements until the license is issued."]
        ],
        docs: ["Valid passport copy for each partner", "Emirates ID copy for residents", "Recent personal photo", "Proposed trade names and activity", "Tenancy contract or office address when required"]
      },
      {
        slug: "foreign-gcc-branch", parent: "formation",
        title: "Foreign and GCC Company Branches",
        summary: "Open a UAE branch of a company registered abroad, whether GCC or foreign, through to the branch license.",
        what: "Companies registered outside the UAE can open branches inside it, operating under the parent company's name and registered activity. Requirements differ between **GCC company branches** and **foreign company branches**, and by emirate and activity, and usually include attesting the parent company's documents and appointing a branch manager. We explain the right route and handle the procedure until the license is issued.",
        handle: [
          ["Choosing the route", "We explain the branch requirements by the parent's nationality, activity and emirate."],
          ["Parent company documents", "We list the documents that need attestation and translation and follow them."],
          ["Branch manager", "We prepare the manager's appointment resolution and power of attorney."],
          ["Branch license", "We file the application and follow it until the branch license is issued."]
        ],
        docs: ["Attested certificate of incorporation of the parent company", "Attested memorandum and articles of the parent company", "Board or partners' resolution to open the branch and appoint its manager", "Passport copy of the branch manager", "Legal translation of non-Arabic documents"]
      },
      {
        slug: "freezone-company-formation", parent: "formation",
        title: "Free Zone Company Formation",
        summary: "Set up your company in the free zone that fits your activity, with a clear comparison to the mainland.",
        what: "The UAE has many free zones, each with its own activities, conditions and office packages. This route suits many activities, especially those dealing with clients outside the UAE. We help you compare free zones with the mainland and choose the zone that fits your activity and plans.",
        handle: [
          ["Free zone comparison", "We explain the differences in activities, offices and requirements."],
          ["Application", "We prepare the application and documents for the chosen zone."],
          ["Follow-up to issuance", "We follow the application with the free zone until the license is issued."],
          ["After formation", "We help with visas and the bank account when needed."]
        ],
        docs: ["Valid passport copy for each partner", "Recent personal photo", "Proposed trade names and activity", "Contact details and address", "Additional documents the free zone requests for the activity"]
      },
      {
        slug: "virtual-license", parent: "formation",
        title: "Virtual Licenses",
        summary: "Licenses that allow certain activities without a physical office, under the issuing authority's conditions.",
        what: "Some licensing authorities in the UAE offer virtual or flexible-office licenses for specific activities. Conditions differ between authorities, and some options may be open to non-residents. We explain the options available for your activity, and the limits of each option, before you apply.",
        handle: [
          ["Activity check", "We confirm your activity is available under this type of license."],
          ["Options", "We compare the issuing authorities and their conditions."],
          ["Application", "We prepare the documents and follow the application until issuance."],
          ["Renewal", "We remind you of the renewal date and handle it on request."]
        ],
        docs: ["Valid passport copy", "Recent personal photo", "Proof of residential address", "Requested activity and proposed trade name"]
      },
      {
        slug: "local-service-agent", parent: "representation",
        title: "UAE Local Service Agent",
        summary: "Arranging an Emirati local service agent for activities and legal forms that require one.",
        what: "For some activities and legal forms, especially certain professional activities fully owned by non-Emiratis, the authorities require a **local service agent** who is a UAE national. The agent represents the establishment before government bodies within the agreed scope and does not hold capital in the company. We help you confirm whether you need one, and arrange and notarize the agreement.",
        handle: [
          ["Requirement check", "We confirm whether your activity and legal form need a local agent."],
          ["Appointment", "We help arrange the agent's appointment through the approved procedure."],
          ["Agency agreement", "We prepare the service agent agreement and follow its notarization."],
          ["Follow-up", "We handle later amendments to the agreement when needed."]
        ],
        docs: ["Passport copy of the owner", "Emirates ID copy if available", "Activity and license details or the initial application"]
      },
      {
        slug: "business-license-amendment", parent: "licensing",
        title: "Business License Amendments",
        summary: "Add or remove an activity, change partners or the manager, or amend the trade name or address.",
        what: "A company needs to amend its license when its details change, such as adding or removing an activity, a partner joining or leaving, appointing a new manager, or changing the trade name or premises. We prepare the amendment file and documents and follow it with the authority, including partner resolutions and memorandum annexes when needed.",
        handle: [
          ["Type of amendment", "We identify the procedure and documents for each change."],
          ["Resolutions and annexes", "We prepare the partners' resolution or memorandum annex when needed."],
          ["Application and follow-up", "We submit the amendment and follow it until approval."],
          ["Updated records", "We follow the change through to the license and linked authorities."]
        ],
        docs: ["Copy of the current trade license", "Memorandum of association and annexes", "Passport and ID copies of the parties involved", "Partners' resolution when needed"]
      },
      {
        slug: "trademark-registration", parent: "licensing",
        title: "Trademark Registration",
        summary: "Protect your business name and logo by registering your trademark with the competent UAE authority.",
        what: "Registering a trademark gives its owner a legal right to use it in the UAE within the registered classes, and protects it from unauthorized use. We help you choose the right classes for your business, run an initial check for similar marks, and file and follow the application with the competent federal authority.",
        handle: [
          ["Classes", "We identify the classes that fit your products or services."],
          ["Initial search", "We run an initial review for similar marks before filing."],
          ["Filing", "We prepare the application with the mark and required documents."],
          ["Follow-up", "We follow each stage and inform you of any comments from the authority."]
        ],
        docs: ["Clear copy of the mark (logo or name)", "Trade license or passport copy of the applicant", "List of products or services to protect", "Power of attorney when needed"]
      },
      {
        slug: "visa-processing", parent: "government",
        title: "Visa Processing",
        summary: "Residence visa procedures for partners, employees and family members, from application to issuance.",
        what: "This service covers residence visa procedures linked to the company, such as partner, investor and employee visas, and family residence. We prepare and follow the applications with the authorities and coordinate medical test and biometrics appointments, until the residence and Emirates ID are issued.",
        handle: [
          ["Visa type", "We explain the right visa type for each case and its requirements."],
          ["Applications", "We prepare the applications and documents and follow them with the authorities."],
          ["Medical and biometrics", "We coordinate the required appointments and inform you in advance."],
          ["Issuance and renewal", "We follow through to issuance and remind you of renewal dates."]
        ],
        docs: ["Valid passport copy", "Recent photo with a white background", "Trade license copy of the sponsoring company", "Additional documents by visa type (employment contract, marriage or birth certificates)"]
      },
      {
        slug: "visa-status-change", parent: "government",
        title: "Visa Status Change",
        summary: "Change a resident's or visitor's status inside the UAE without leaving, where the system allows it.",
        what: "A status change moves a visa holder from one status to another while inside the UAE, such as from a visit visa to residence, or transferring residence to a new sponsor, in the cases the regulations allow. We review your case, explain the available procedure and follow it until complete.",
        handle: [
          ["Case review", "We review your current visa and the status you need."],
          ["Procedure", "We confirm whether the change is possible inside the UAE and what it requires."],
          ["Application", "We prepare and follow the application with the authority."],
          ["Residence", "We follow the next steps until the new residence is issued."]
        ],
        docs: ["Passport copy", "Copy of the current visa or residence", "Recent personal photo", "Documents of the new sponsor"]
      },
      {
        slug: "pro-services", parent: "government",
        title: "PRO Services",
        summary: "Ongoing handling of your company's government transactions, without a full-time employee.",
        what: "Companies need constant follow-up on government work, from license and residence renewals to labor files, permits and official correspondence. We act as your company's **PRO**, following these transactions and their deadlines on your behalf, so you can focus on running your business.",
        handle: [
          ["License and residence renewals", "We track renewal dates and handle them before expiry."],
          ["Labor files", "We follow employment contracts and permits with the relevant authorities."],
          ["Government transactions", "We complete transactions and requests with the competent departments."],
          ["Deadline alerts", "We alert you to documents nearing expiry in good time."]
        ],
        docs: ["Trade license copy", "Establishment card if available", "Power of attorney or authorization when needed", "Documents specific to each transaction"]
      },
      {
        slug: "bank-account-opening", parent: "government",
        title: "Bank Account Opening",
        summary: "Preparing your company's bank account file and coordinating with the bank until a decision is made.",
        what: "Opening a corporate bank account needs a complete file that explains the company's activity, owners and source of funds. We help prepare the file to the bank's requirements, coordinate with banks that suit your activity, and follow the application. The decision to open the account rests with the bank alone.",
        handle: [
          ["Choosing a bank", "We help you choose banks that suit your activity."],
          ["Preparing the file", "We prepare the company file and supporting documents for the bank."],
          ["Coordination", "We coordinate the appointments and meetings the bank requires."],
          ["Follow-up", "We follow the application and tell you about any extra documents requested."]
        ],
        docs: ["Trade license copy", "Memorandum of association and registry certificate", "Passport and ID copies of partners and signatories", "Tenancy contract or proof of premises", "Brief on the activity, expected clients and suppliers"]
      },
      {
        slug: "business-plan", parent: "documents",
        title: "Business Plan",
        summary: "A clear business plan for your project, for authorities, banks or partners.",
        what: "A business plan explains the project idea, its target market, how it will operate and its financial projections. You may need one when applying to some authorities or banks, or when presenting the project to partners and funders, and it helps you decide to start on a clear basis. We prepare the plan with you, based on your actual data.",
        handle: [
          ["Understanding the project", "We gather the details of your idea, market and expected costs."],
          ["Market study", "We prepare a section on the market, competitors and target clients."],
          ["Financial projections", "We prepare cost and revenue tables based on your data."],
          ["Final document", "We deliver an organized plan ready to submit or present."]
        ],
        docs: ["Description of the project and activity", "Expected setup and operating costs", "Expected prices and revenue", "Partners' details and experience"]
      }
    ]
  }
};
