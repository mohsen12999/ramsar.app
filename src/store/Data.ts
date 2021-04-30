import axios from "axios";
import { Action, Reducer } from "redux";
import { Status } from "../shares/Constants";
import { ICategory, IFacility } from "../shares/Interfaces";
import { DATA_URL } from "../shares/URLs";
import { AppThunkAction } from "./";
import { fakeCategories, fakeFacilities } from "../shares/FakeData";
import {
  GetCategoriesFromLocalStorage,
  GetFacilitiesFromLocalStorage,
  SaveCategoriesToLocalStorage,
  SaveFacilitiesToLocalStorage,
} from "../shares/LocalStorages";

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface IDataState {
  status: Status;

  categories: ICategory[];
  facilities: IFacility[];
}

export enum DataActions {
  DATA_REQUEST = "DATA_REQUEST",
  DATA_SUCCESS = "DATA_SUCCESS ",
  DATA_FAILURE = "DATA_FAILURE ",
}

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.
// Use @typeName and isActionType for type detection that works even after serialization/deserialization.

export interface ILoadData {
  type: DataActions;
  payload?: { message?: string; data?: any; error?: any };
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
export type KnownAction = ILoadData;

export const actionCreators = {
  loadData: (): AppThunkAction<KnownAction> => (dispatch, getState) => {
    if (getState().data?.status === Status.LOADING) {
      dispatch({
        type: DataActions.DATA_FAILURE,
        payload: { message: "we are in loading!" },
      });
      return false;
    }

    dispatch({ type: DataActions.DATA_REQUEST } as ILoadData);

    try {
      axios
        .get(DATA_URL)
        .then((response) => {
          if (response && response.data && response.data.success) {
            dispatch({
              type: DataActions.DATA_SUCCESS,
              payload: {
                message: "axios success get data",
                data: response.data,
              },
            });
            return true;
          } else {
            dispatch({
              type: DataActions.DATA_FAILURE,
              payload: {
                message: "axios not success",
                error: response,
              },
            });
            return false;
          }
        })
        .catch((error) => {
          dispatch({
            type: DataActions.DATA_FAILURE,
            payload: { message: "axios catch error", error: error },
          });
          console.log("[error]", error);
          return false;
        });
    } catch (error) {
      dispatch({
        type: DataActions.DATA_FAILURE,
        payload: { message: "axios catch error", error: error },
      });
      console.log("[error]", error);
      return false;
    }
  },
};

export const reducer: Reducer<IDataState> = (
  state: IDataState | undefined,
  incomingAction: Action
): IDataState => {
  if (state === undefined) {
    return {
      status: Status.INIT,
      // TODO: Remove for production
      categories: fakeCategories,
      facilities: fakeFacilities,
      //categories: [],
      //facilities: [],
    };
  }

  const action = incomingAction as KnownAction;

  switch (action.type) {
    case DataActions.DATA_REQUEST:
      const cachedCategories = GetCategoriesFromLocalStorage();
      const cachedFacilities = GetFacilitiesFromLocalStorage();

      const initState = { ...state, status: Status.LOADING };
      if (cachedCategories) {
        initState.categories = cachedCategories;
      }
      if (cachedFacilities) {
        initState.facilities = cachedFacilities;
      }
      return initState;

    case DataActions.DATA_FAILURE:
      return { ...state, status: Status.FAILED };

    case DataActions.DATA_SUCCESS:
      if (action.payload && action.payload.data) {
        const data = action.payload.data;
        const currentState = { ...state };
        if (data.categories) {
          currentState.categories = data.categories;
          SaveCategoriesToLocalStorage(data.categories);
        }
        if (data.facilities) {
          currentState.facilities = data.facilities;
          SaveFacilitiesToLocalStorage(data.facilities);
        }
        return { ...currentState, status: Status.SUCCEEDED };
      }
      return { ...state, status: Status.SUCCEEDED };

    default:
      return state;
  }
};
