import PRODUCTS_ACTION_TYPES from "./types";
import { ProductsAsync } from "../../models/products/actions";
import ProductsActionTypes from "../../models/products/index";

const INITIAL_STATE: ProductsAsync = {
  products: null,
  isFetching: false,
  errorMessage: undefined,
};
console.log(ProductsActionTypes);
const productsReducer = (
  state = INITIAL_STATE,
  action: ProductsActionTypes
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
