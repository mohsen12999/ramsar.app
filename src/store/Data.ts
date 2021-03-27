import axios from "axios";
import { Action, Reducer } from "redux";
import { Status } from "../shares/Constants";
import { ICategory, IFacility } from "../shares/Interfaces";
import { GetDataFromLocalStorage } from "../shares/LocalStorages";
import { DATA_URL } from "../shares/URLs";
import { AppThunkAction } from "./";
import { fakeCategories, fakeFacilities } from "../shares/FakeData";

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
      axios.get(DATA_URL).then((response) => {
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
            payload: { message: "axios not success", error: response },
          });
          return false;
        }
      });
    } catch (error) {
      dispatch({
        type: DataActions.DATA_FAILURE,
        payload: { message: "axios catch error", error: error },
      });
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
      categories: [],
      facilities: [],
    };
  }

  const action = incomingAction as KnownAction;

  switch (action.type) {
    case DataActions.DATA_REQUEST:
      const cachedData = GetDataFromLocalStorage();

      if (process.env.NODE_ENV !== "production") {
        cachedData.categories = { ...fakeCategories };
        cachedData.facilities = { ...fakeFacilities };
      }

      return cachedData
        ? { ...cachedData, status: Status.LOADING }
        : { ...state, status: Status.LOADING };

    case DataActions.DATA_FAILURE:
      return { ...state, status: Status.FAILED };

    case DataActions.DATA_SUCCESS:
      if (action.payload && action.payload.data) {
        const data = action.payload.data;
        const currentState = { ...state };
        if (data.categories) {
          currentState.categories = data.categories;
        }
        if (data.facilities) {
          currentState.facilities = data.facilities;
        }
        return { ...currentState, status: Status.SUCCEEDED };
      }
      return { ...state, status: Status.SUCCEEDED };

    default:
      return state;
  }
};
