INSERT INTO `categories`(`id`, `name`, `img`, `category_id`, `created_at`, `updated_at`)
VALUES
( 1, "مراکز درمانی","/img/ambulance.png",  0, CURRENT_TIME() , CURRENT_TIME() ),
( 2, "خدمات فنی","/img/maintenance.png",  0, CURRENT_TIME() , CURRENT_TIME() ),
( 3, "موسسات","/img/classroom.png",  0, CURRENT_TIME() , CURRENT_TIME() ),
( 4, "وسایل نقلیه","/img/car.png",  0, CURRENT_TIME() , CURRENT_TIME() ),
( 5, "غذا و نوشیدنی","/img/coffee.png",  0, CURRENT_TIME() , CURRENT_TIME() ),
( 6, "سایر مراکز","/img/library.png",  0, CURRENT_TIME() , CURRENT_TIME() ),

( 101, "بیمارستان‌","/img/hospital-room.png",  1, CURRENT_TIME() , CURRENT_TIME() ),
( 102, "داروخانه","/img/pill.png",  1, CURRENT_TIME() , CURRENT_TIME() ),
( 103, "مطب","/img/hospital.png",  1, CURRENT_TIME() , CURRENT_TIME() ),
( 104, "کالای پزشکی","/img/stethoscope.png",  1, CURRENT_TIME() , CURRENT_TIME() ),
( 105, "خدمات پزشکی","/img/hospital-gown.png",  1, CURRENT_TIME() , CURRENT_TIME() ),
( 106,"خدمات دام‌پزشکی", "/img/veterinary-examination.png", 1 , CURRENT_TIME() , CURRENT_TIME() ),

( 201, "کلیدسازی","/img/key.png",  2, CURRENT_TIME() , CURRENT_TIME() ),
( 202, "تعمیر ماشین","/img/car-service.png",  2, CURRENT_TIME() , CURRENT_TIME() ),
( 203,"تعمیر وسایل برقی", "/img/vacuum-cleaner.png", 2 , CURRENT_TIME() , CURRENT_TIME() ),

( 301, "نگارخانه","/img/picture.png",  3, CURRENT_TIME() , CURRENT_TIME() ),
( 302,"موسسه فرهنگی، هنری", "/img/classroom.png", 3 , CURRENT_TIME() , CURRENT_TIME() ),
( 303,"موسسه فنی و حرفه‌ای", "/img/classroom.png", 3 , CURRENT_TIME() , CURRENT_TIME() ),

( 401, "تاکسی بیسیم","/img/car.png",  4, CURRENT_TIME() , CURRENT_TIME() ),
( 402, "تاکسی تلفنی","/img/car.png",  4, CURRENT_TIME() , CURRENT_TIME() ),

( 501, "کافی شاپ","/img/coffee.png",  5, CURRENT_TIME() , CURRENT_TIME() ),
( 502, "رستوران","/img/restaurant-menu.png",  5, CURRENT_TIME() , CURRENT_TIME() ),
( 503, "فست فود","/img/hamburger.png",  5, CURRENT_TIME() , CURRENT_TIME() ),
( 504, "سایر","/img/food-bar.png",  5, CURRENT_TIME() , CURRENT_TIME() ),

( 601, "اداره دولتی","/img/library(1).png",  6, CURRENT_TIME() , CURRENT_TIME() ),
( 602, "شرکت خصوصی","/img/library.png",  6, CURRENT_TIME() , CURRENT_TIME() )

INSERT INTO `facilities`(`id`, `name`,`address`, `description`,  `tel`, `tags`, `category_id`, `img`, `created_at`, `updated_at`)
VALUES
(
    101,
    "آتش نشانی",
    "خیابان سخت سر - جاده بالا",
    "",
    "125",
    "",
    1,
    "/img/fire-element.png",
    CURRENT_TIME(),
    CURRENT_TIME()
  ),
  (
    102,
    "اورژانس",
    "بیمارستان رامسر",
    "فوریت پزشکی و درمانی",
    "115",
    "",
    1,
    "/img/ambulance.png",
    CURRENT_TIME(),
    CURRENT_TIME()
  ),

  (
    10101,
    "بیمارستان رامسر",
    " ابریشم محله خیابان مطهری میدان انقلاب",
    "",
    "",
    "",
    101,
    "",
    CURRENT_TIME(),
    CURRENT_TIME()
  ),
  (
    10102,
    "بیمارستان کتالم",
    "کتالم",
    "",
    "",
    "",
    101,
    "",
    CURRENT_TIME(),
    CURRENT_TIME()
  ),

  (
    10201,
    "داروخانه شبانه روزی دکتر شجاعی",
    "ابریشم محله خیابان مطهری کنار رستوران گلسرخ",
    "",
    "",
    "",
    102,
    "",
    CURRENT_TIME(),
    CURRENT_TIME()
  ),
  (
    10202,
    "داروخانه دکتر تاجیک",
    "ابریشم محله خیابان مطهری روبروی کوچه ارشاد",
    "",
    "",
    "",
    102,
    "",
    CURRENT_TIME(),
    CURRENT_TIME()
  ),
  (
    10203,
    "داروخانه دکتر امیری",
    "ابریشم محله خیابان مطهری روبروی بیمارستان",
    "",
    "",
    "",
    102,
    "",
    CURRENT_TIME(),
    CURRENT_TIME()
  ),
  (
    10204,
    "داروخانه سیزده آبان",
    "ابریشم محله خیابان مطهری جنب بیمارستان",
    "",
    "",
    "",
    102,
    "",
    CURRENT_TIME(),
    CURRENT_TIME()
  ),

  (
    10301,
    "دکتر محمدعلی افتخاری",
    "نارنج بن - خیابان مطهری - کلینیک سینا",
    "متخصص بیماری‌های کودکان",
    "",
    "",
    103,
    "",
    CURRENT_TIME(),
    CURRENT_TIME()
  ),
  (
    10302,
    "دکتر ناهید نیکنامی ",
    "ابریشم محله- روبروی دفتر هواپیمایی هما",
    "متخصص بیماری های داخلی",
    "",
    "",
    103,
    "",
    CURRENT_TIME(),
    CURRENT_TIME()
  ),

  (
    10401,
    "کالای پزشکی رازی",
    "ابریشم محله",
    "",
    "",
    "",
    104,
    "",
    CURRENT_TIME(),
    CURRENT_TIME()
  ),

  (
    10601,
    "داروخانه دامپزشکی دکتر حلاجیان",
    " میدان امام - بین دوپل",
    "",
    "",
    "",
    106,
    "",
    CURRENT_TIME(),
    CURRENT_TIME()
  ),

  (
    20101,
    "کلیدسازی محمدی",
    "ابریشم محله - کوچه ارشاد",
    "",
    "09350646526",
    "",
    201,
    "",
    CURRENT_TIME(),
    CURRENT_TIME()
  ),
  (
    20102,
    "کلیدسازی فیروز بخش",
    "ابریشم محله - روبروی دبرستان امام",
    "",
    "",
    "",
    201,
    "",
    CURRENT_TIME(),
    CURRENT_TIME()
  ),

  (
    20201,
    "تیون آپ مروارید",
    "خیابان عباس مفرد - رضی محله",
    "",
    "",
    "",
    202,
    "",
    CURRENT_TIME(),
    CURRENT_TIME()
  ),

  (
    20301,
    "تعمیرات افتخاری",
    "نارنج بن - انتهای پاساژ اسدیان",
    "",
    "",
    "",
    203,
    "",
    CURRENT_TIME(),
    CURRENT_TIME()
  ),

  (
    30101,
    "نگارخانه حیاط حیات",
    "ابریشم محله خیابان مطهری روبروی بانک ملت مرکزی",
    "",
    "01155229119",
    "",
    301,
    "",
    CURRENT_TIME(),
    CURRENT_TIME()
  ),

  (
    30201,
    "موسسه نسیم",
    "نارنج بن - جنب بانک صادرات مرکزی",
    "کلاس‌های پیانو گیتار تنبک و دیگر سازهای موسیقیایی",
    "",
    "",
    302,
    "",
    CURRENT_TIME(),
    CURRENT_TIME()
  ),
  (
    30202,
    "موسسه ادریبهشت",
    "ابریشم محله روبروی کتابخانه احمدی‌نژاد",
    "کلاس‌های پیانو گیتار تنبک و دیگر سازهای موسیقیایی",
    "",
    "",
    302,
    "",
    CURRENT_TIME(),
    CURRENT_TIME()
  ),
  (
    30203,
    "موسسه خوارزمی",
    "نارنج بن - جنب بانک صادرات مرکزی",
    "کلاس‌های تقویتی و کنکور",
    "",
    "",
    302,
    "",
    CURRENT_TIME(),
    CURRENT_TIME()
  ),

  (
    30301,
    "موسسه نسیم",
    "نارنج بن - جنب بانک صادرات مرکزی",
    "",
    "",
    "",
    303,
    "",
    CURRENT_TIME(),
    CURRENT_TIME()
  ),

  (
    40101,
    "تاکسی بیسیم",
    "",
    "",
    "1824",
    "",
    401,
    "",
    CURRENT_TIME(),
    CURRENT_TIME()
  ),

  (
    40201,
    "ابریشم",
    "ابریشم محله - روبروی بیمارستان",
    "",
    "01155222444",
    "",
    402,
    "",
    CURRENT_TIME(),
    CURRENT_TIME()
  ),
  (
    40202,
    "کوج",
    "تعاونی، خیابان دانش آموزان نام آور",
    "",
    "01155224160",
    "",
    402,
    "",
    CURRENT_TIME(),
    CURRENT_TIME()
  ),
  (
    40203,
    "تاکسی 2000",
    "نارنج بن",
    "",
    "01155222000",
    "",
    402,
    "",
    CURRENT_TIME(),
    CURRENT_TIME()
  ),

  (
    50101,
    "کافه ژوان",
    "رمک برج چشم انداز",
    "",
    "",
    "",
    501,
    "",
    CURRENT_TIME(),
    CURRENT_TIME()
  ),
  (
    50102,
    "کافه دیو",
    "کمربندی فاز 3 - جنب رستوران میزبان",
    "",
    "",
    "",
    501,
    "",
    CURRENT_TIME(),
    CURRENT_TIME()
  ),

  (
    50201,
    "رستوران میزبان",
    "کمربندی فاز 3 - جنب کافه دیو",
    "",
    "",
    "",
    502,
    "",
    CURRENT_TIME(),
    CURRENT_TIME()
  ),
  (
    50202,
    "رستوران برادران",
    "رمک",
    "",
    "",
    "",
    502,
    "",
    CURRENT_TIME(),
    CURRENT_TIME()
  ),

  (
    50301,
    "پیتزا شب",
    "ابریشم محله روبروی مدرسه ببری",
    "",
    "",
    "",
    503,
    "",
    CURRENT_TIME(),
    CURRENT_TIME()
  ),

  (
    50401,
    "صبحانه ایرانی",
    "کمربندی - جنب اداره بازرگانی",
    "",
    "",
    "",
    504,
    "",
    CURRENT_TIME(),
    CURRENT_TIME()
  ),

  (
    60101,
    "اداره دارایی",
    "جاده بالا بعد از سه راه آبگرم",
    "",
    "",
    "",
    601,
    "",
    CURRENT_TIME(),
    CURRENT_TIME()
  ),

  (
    60201,
    "کاوشگران البرز",
    "نارنج بن - جنب بانک صادرات",
    "طراحی سایت و اپ موبایل",
    "",
    "",
    602,
    "",
    CURRENT_TIME(),
    CURRENT_TIME()
  )
