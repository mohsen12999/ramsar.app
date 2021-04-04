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

export const fakeFacilities: IFacility[] = [];
