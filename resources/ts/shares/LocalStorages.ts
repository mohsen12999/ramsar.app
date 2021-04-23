// import { IDataState } from "../store/Data";
import { ICategory, IFacility } from "./Interfaces";

// const Data = "Data";
const Categories = "Categories";
const Facilities = "Facilities";

// export const SaveDataToLocalStorage = (data: IDataState) => {
//     localStorage.setItem(Data, JSON.stringify(data));
// };

// export const GetDataFromLocalStorage = (): IDataState => {
//     return JSON.parse(localStorage.getItem(Data) as string);
// };

export const SaveCategoriesToLocalStorage = (categories: ICategory[]) => {
    localStorage.setItem(Categories, JSON.stringify(categories));
};

export const GetCategoriesFromLocalStorage = (): ICategory[] => {
    return JSON.parse(localStorage.getItem(Categories) as string);
};

export const SaveFacilitiesToLocalStorage = (facilities: IFacility[]) => {
    localStorage.setItem(Facilities, JSON.stringify(facilities));
};

export const GetFacilitiesFromLocalStorage = (): IFacility[] => {
    return JSON.parse(localStorage.getItem(Facilities) as string);
};
