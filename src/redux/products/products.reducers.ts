import PRODUCTS_ACTION_TYPES from "./types";
import { ProductsAsync } from "../../models/products/actions";

const INITIAL_STATE: ProductsAsync = {
  products: null,
  isFetching: false,
  errorMessage: undefined,
};

const productsReducer = (
  state = INITIAL_STATE,
  action: { type: any; payload: any }
): ProductsAsync => {
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
