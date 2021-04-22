export interface ICategory {
    id: number;
    name: string;
    img: string;

    category_id: number;
}

export interface IFacility {
    id: number;
    name: string;
    description: string;
    address: string;
    tel: string;
    tags: string;

    img?: string;

    category_id: number;
}
