export interface ICategory {
  id: number;
  name: string;
  img: string;

  parentId: number;
}

export interface IFacility {
  id: number;
  name: string;
  tags: string[];

  categoryId: number;
}
