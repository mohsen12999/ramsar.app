import { ICategory, IFacility } from "./Interfaces";

export const fakeCategories: ICategory[] = [
  { id: 1, name: "مراکز درمانی", img: "/img/ambulance.png", parentId: 0 },
  { id: 2, name: "خدمات فنی", img: "/img/maintenance.png", parentId: 0 },
  { id: 3, name: "موسسات", img: "/img/classroom.png", parentId: 0 },
  { id: 4, name: "وسایل نقلیه", img: "/img/car.png", parentId: 0 },
  { id: 5, name: "غذا و نوشیدنی", img: "/img/coffee.png", parentId: 0 },
  { id: 6, name: "سایر مراکز", img: "/img/library.png", parentId: 0 },

  { id: 101, name: "بیمارستان‌", img: "/img/ambulance.png", parentId: 1 },
  { id: 102, name: "داروخانه", img: "/img/ambulance.png", parentId: 1 },
  { id: 103, name: "مطب", img: "/img/ambulance.png", parentId: 1 },
  { id: 104, name: "کالای پزشکی", img: "/img/ambulance.png", parentId: 1 },
  { id: 105, name: "خدمات پزشکی", img: "/img/ambulance.png", parentId: 1 },
  { id: 105, name: "خدمات دام‌پزشکی", img: "/img/ambulance.png", parentId: 1 },

  { id: 201, name: "کلیدسازی", img: "/img/maintenance.png", parentId: 2 },
  { id: 202, name: "تعمیر ماشین", img: "/img/maintenance.png", parentId: 2 },
  {
    id: 203,
    name: "تعمیر وسایل برقی",
    img: "/img/maintenance.png",
    parentId: 2,
  },

  { id: 301, name: "نگارخانه", img: "/img/classroom.png", parentId: 3 },
  {
    id: 302,
    name: "موسسات فرهنگی، هنری",
    img: "/img/classroom.png",
    parentId: 3,
  },
  {
    id: 303,
    name: "موسسات فنی و حرفه‌ای",
    img: "/img/classroom.png",
    parentId: 3,
  },

  { id: 401, name: "تاکسی بیسیم", img: "/img/car.png", parentId: 4 },
  { id: 402, name: "تاکسی تلفنی", img: "/img/car.png", parentId: 4 },

  { id: 501, name: "کافی شاپ", img: "/img/coffee.png", parentId: 5 },
  { id: 502, name: "رستوران", img: "/img/coffee.png", parentId: 5 },
  { id: 503, name: "فست فود", img: "/img/coffee.png", parentId: 5 },
  { id: 504, name: "سایر", img: "/img/coffee.png", parentId: 5 },

  { id: 601, name: "اداره دولتی", img: "/img/library.png", parentId: 6 },
  { id: 602, name: "شرکت خصوصی", img: "/img/library.png", parentId: 6 },
];

export const fakeFacilities: IFacility[] = [];
