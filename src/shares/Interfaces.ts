export interface ICategory {
  id: number;
  name: string;
  img: string;

  parentId: number;
}

export interface IFacility {
  id: number;
  name: string;
  description: string;
  address: string;
  tel: string;
  tags: string;

  categoryId: number;
}
