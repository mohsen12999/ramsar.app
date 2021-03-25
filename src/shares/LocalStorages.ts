import { IDataState } from "../store/Data";

const Data = "Data";

export const SaveDataToLocalStorage = (data: IDataState) => {
  localStorage.setItem(Data, JSON.stringify(data));
};

export const GetDataFromLocalStorage = (): IDataState => {
  return JSON.parse(localStorage.getItem(Data) as string);
};
