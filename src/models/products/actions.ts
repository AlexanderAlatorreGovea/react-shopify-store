import { IProducts } from "./Products";
import PRODUCTS_ACTION_TYPES from "../../redux/products/types";

export interface ProductsAsync {
  products: null | IProducts[];
  isFetching: boolean;
  errorMessage?: string;
}
 
export interface FetchProductsStart {
  type: typeof PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_START;
}

export interface FetchProductsSuccess {
  type: typeof PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS;
  payload: IProducts[];
}

export interface FetchProductsFailure {
  type: typeof PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_FAILURE;
  payload: string;
}


