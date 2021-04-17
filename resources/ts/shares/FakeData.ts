import { ICategory, IFacility } from "./Interfaces";

export const fakeCategories: ICategory[] = [
  { id: 1, name: "مراکز درمانی", img: "/img/ambulance.png", parentId: 0 },
  { id: 2, name: "خدمات فنی", img: "/img/maintenance.png", parentId: 0 },
  { id: 3, name: "موسسات", img: "/img/classroom.png", parentId: 0 },
  { id: 4, name: "وسایل نقلیه", img: "/img/car.png", parentId: 0 },
  { id: 5, name: "غذا و نوشیدنی", img: "/img/coffee.png", parentId: 0 },
  { id: 6, name: "سایر مراکز", img: "/img/library.png", parentId: 0 },

  { id: 101, name: "بیمارستان‌", img: "/img/hospital-room.png", parentId: 1 },
  { id: 102, name: "داروخانه", img: "/img/pill.png", parentId: 1 },
  { id: 103, name: "مطب", img: "/img/hospital.png", parentId: 1 },
  { id: 104, name: "کالای پزشکی", img: "/img/stethoscope.png", parentId: 1 },
  { id: 105, name: "خدمات پزشکی", img: "/img/hospital-gown.png", parentId: 1 },
  {
    id: 106,
    name: "خدمات دام‌پزشکی",
    img: "/img/veterinary-examination.png",
    parentId: 1,
  },

  { id: 201, name: "کلیدسازی", img: "/img/key.png", parentId: 2 },
  { id: 202, name: "تعمیر ماشین", img: "/img/car-service.png", parentId: 2 },
  {
    id: 203,
    name: "تعمیر وسایل برقی",
    img: "/img/vacuum-cleaner.png",
    parentId: 2,
  },

  { id: 301, name: "نگارخانه", img: "/img/picture.png", parentId: 3 },
  {
    id: 302,
    name: "موسسه فرهنگی، هنری",
    img: "/img/classroom.png",
    parentId: 3,
  },
  {
    id: 303,
    name: "موسسه فنی و حرفه‌ای",
    img: "/img/classroom.png",
    parentId: 3,
  },

  { id: 401, name: "تاکسی بیسیم", img: "/img/car.png", parentId: 4 },
  { id: 402, name: "تاکسی تلفنی", img: "/img/car.png", parentId: 4 },

  { id: 501, name: "کافی شاپ", img: "/img/coffee.png", parentId: 5 },
  { id: 502, name: "رستوران", img: "/img/restaurant-menu.png", parentId: 5 },
  { id: 503, name: "فست فود", img: "/img/hamburger.png", parentId: 5 },
  { id: 504, name: "سایر", img: "/img/food-bar.png", parentId: 5 },

  { id: 601, name: "اداره دولتی", img: "/img/library(1).png", parentId: 6 },
  { id: 602, name: "شرکت خصوصی", img: "/img/library.png", parentId: 6 },
];

export const fakeFacilities: IFacility[] = [
  {
    id: 101,
    name: "آتش نشانی",
    address: "خیابان سخت سر - جاده بالا",
    description: "",
    tel: "125",
    tags: "",
    categoryId: 1,
    img: "/img/fire-element.png",
  },
  {
    id: 102,
    name: "اورژانس",
    address: "بیمارستان رامسر",
    description: "فوریت پزشکی و درمانی",
    tel: "115",
    tags: "",
    categoryId: 1,
    img: "/img/ambulance.png",
  },

  {
    id: 10101,
    name: "بیمارستان رامسر",
    address: " ابریشم محله خیابان مطهری میدان انقلاب",
    description: "",
    tel: "",
    tags: "",
    categoryId: 101,
  },
  {
    id: 10102,
    name: "بیمارستان کتالم",
    address: "کتالم",
    description: "",
    tel: "",
    tags: "",
    categoryId: 101,
  },

  {
    id: 10201,
    name: "داروخانه شبانه روزی دکتر شجاعی",
    address: "ابریشم محله خیابان مطهری کنار رستوران گلسرخ",
    description: "",
    tel: "",
    tags: "",
    categoryId: 102,
  },
  {
    id: 10202,
    name: "داروخانه دکتر تاجیک",
    address: "ابریشم محله خیابان مطهری روبروی کوچه ارشاد",
    description: "",
    tel: "",
    tags: "",
    categoryId: 102,
  },
  {
    id: 10203,
    name: "داروخانه دکتر امیری",
    address: "ابریشم محله خیابان مطهری روبروی بیمارستان",
    description: "",
    tel: "",
    tags: "",
    categoryId: 102,
  },
  {
    id: 10204,
    name: "داروخانه سیزده آبان",
    address: "ابریشم محله خیابان مطهری جنب بیمارستان",
    description: "",
    tel: "",
    tags: "",
    categoryId: 102,
  },

  {
    id: 10301,
    name: "دکتر محمدعلی افتخاری",
    address: "نارنج بن - خیابان مطهری - کلینیک سینا",
    description: "متخصص بیماری‌های کودکان",
    tel: "",
    tags: "",
    categoryId: 103,
  },
  {
    id: 10302,
    name: "دکتر ناهید نیکنامی ",
    address: "ابریشم محله- روبروی دفتر هواپیمایی هما",
    description: "متخصص بیماری های داخلی",
    tel: "",
    tags: "",
    categoryId: 103,
  },

  {
    id: 10401,
    name: "کالای پزشکی رازی",
    address: "ابریشم محله",
    description: "",
    tel: "",
    tags: "",
    categoryId: 104,
  },

  {
    id: 10601,
    name: "داروخانه دامپزشکی دکتر حلاجیان",
    address: " میدان امام - بین دوپل",
    description: "",
    tel: "",
    tags: "",
    categoryId: 106,
  },

  {
    id: 20101,
    name: "کلیدسازی محمدی",
    address: "ابریشم محله - کوچه ارشاد",
    description: "",
    tel: "09350646526",
    tags: "",
    categoryId: 201,
  },
  {
    id: 20102,
    name: "کلیدسازی فیروز بخش",
    address: "ابریشم محله - روبروی دبرستان امام",
    description: "",
    tel: "",
    tags: "",
    categoryId: 201,
  },

  {
    id: 20201,
    name: "تیون آپ مروارید",
    address: "خیابان عباس مفرد - رضی محله",
    description: "",
    tel: "",
    tags: "",
    categoryId: 202,
  },

  {
    id: 20301,
    name: "تعمیرات افتخاری",
    address: "نارنج بن - انتهای پاساژ اسدیان",
    description: "",
    tel: "",
    tags: "",
    categoryId: 203,
  },

  {
    id: 30101,
    name: "نگارخانه حیاط حیات",
    address: "ابریشم محله خیابان مطهری روبروی بانک ملت مرکزی",
    description: "",
    tel: "01155229119",
    tags: "",
    categoryId: 301,
  },

  {
    id: 30201,
    name: "موسسه نسیم",
    address: "نارنج بن - جنب بانک صادرات مرکزی",
    description: "کلاس‌های پیانو گیتار تنبک و دیگر سازهای موسیقیایی",
    tel: "",
    tags: "",
    categoryId: 302,
  },
  {
    id: 30202,
    name: "موسسه ادریبهشت",
    address: "ابریشم محله روبروی کتابخانه احمدی‌نژاد",
    description: "کلاس‌های پیانو گیتار تنبک و دیگر سازهای موسیقیایی",
    tel: "",
    tags: "",
    categoryId: 302,
  },
  {
    id: 30203,
    name: "موسسه خوارزمی",
    address: "نارنج بن - جنب بانک صادرات مرکزی",
    description: "کلاس‌های تقویتی و کنکور",
    tel: "",
    tags: "",
    categoryId: 302,
  },

  {
    id: 30301,
    name: "موسسه نسیم",
    address: "نارنج بن - جنب بانک صادرات مرکزی",
    description: "",
    tel: "",
    tags: "",
    categoryId: 303,
  },

  {
    id: 40101,
    name: "تاکسی بیسیم",
    address: "",
    description: "",
    tel: "1824",
    tags: "",
    categoryId: 401,
  },

  {
    id: 40201,
    name: "ابریشم",
    address: "ابریشم محله - روبروی بیمارستان",
    description: "",
    tel: "01155222444",
    tags: "",
    categoryId: 402,
  },
  {
    id: 40202,
    name: "کوج",
    address: "تعاونی، خیابان دانش آموزان نام آور",
    description: "",
    tel: "01155224160",
    tags: "",
    categoryId: 402,
  },
  {
    id: 40203,
    name: "تاکسی 2000",
    address: "نارنج بن",
    description: "",
    tel: "01155222000",
    tags: "",
    categoryId: 402,
  },

  {
    id: 50101,
    name: "کافه ژوان",
    address: "رمک برج چشم انداز",
    description: "",
    tel: "",
    tags: "",
    categoryId: 501,
  },
  {
    id: 50102,
    name: "کافه دیو",
    address: "کمربندی فاز 3 - جنب رستوران میزبان",
    description: "",
    tel: "",
    tags: "",
    categoryId: 501,
  },

  {
    id: 50201,
    name: "رستوران میزبان",
    address: "کمربندی فاز 3 - جنب کافه دیو",
    description: "",
    tel: "",
    tags: "",
    categoryId: 502,
  },
  {
    id: 50202,
    name: "رستوران برادران",
    address: "رمک",
    description: "",
    tel: "",
    tags: "",
    categoryId: 502,
  },

  {
    id: 50301,
    name: "پیتزا شب",
    address: "ابریشم محله روبروی مدرسه ببری",
    description: "",
    tel: "",
    tags: "",
    categoryId: 503,
  },

  {
    id: 50401,
    name: "صبحانه ایرانی",
    address: "کمربندی - جنب اداره بازرگانی",
    description: "",
    tel: "",
    tags: "",
    categoryId: 504,
  },

  {
    id: 60101,
    name: "اداره دارایی",
    address: "جاده بالا بعد از سه راه آبگرم",
    description: "",
    tel: "",
    tags: "",
    categoryId: 601,
  },

  {
    id: 60201,
    name: "کاوشگران البرز",
    address: "نارنج بن - جنب بانک صادرات",
    description: "طراحی سایت و اپ موبایل",
    tel: "",
    tags: "",
    categoryId: 602,
  },
];
