import { ICategory, IFacility } from "./Interfaces";

export const fakeCategories: ICategory[] = [
  { id: 1, name: "مراکز درمانی", img: "/img/ambulance.png", parentId: 0 },
  { id: 2, name: "خدمات فنی", img: "/img/maintenance.png", parentId: 0 },
  { id: 3, name: "موسسات هنری", img: "/img/classroom.png", parentId: 0 },
  { id: 4, name: "وسایل نقلیه", img: "/img/car.png", parentId: 0 },
  { id: 5, name: "غذا و نوشیدنی", img: "/img/coffee.png", parentId: 0 },
  { id: 6, name: "سایر مراکز", img: "/img/library.png", parentId: 0 },
];

export const fakeFacilities: IFacility[] = [];
