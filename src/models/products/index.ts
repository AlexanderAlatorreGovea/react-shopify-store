import {
  FetchProductsStart,
  FetchProductsSuccess,
  FetchProductsFailure,
} from "./actions";

type ProductsActionTypes =
  FetchProductsStart
  | FetchProductsSuccess
  | FetchProductsFailure;

export default ProductsActionTypes;
