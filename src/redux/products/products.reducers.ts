import PRODUCTS_ACTION_TYPES from "./types";
import { Interface } from "readline";

interface IProducts {
  products: null,
  isFetching: Boolean,
  errorMessage?: undefined | string 
}


const INITIAL_STATE: IProducts = {
  products: [],
  isFetching: false,
  errorMessage: undefined,
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_START:
      return {
        ...state,
        isFetching: true,
      };
    case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        products: action.payload,
      };
    case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
