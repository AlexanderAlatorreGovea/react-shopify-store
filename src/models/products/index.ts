import { ThunkAction } from "redux-thunk";
import { RootProps } from "../../redux/store";
import {
  FetchProductsStart,
  FetchProductsSuccess,
  FetchProductsFailure,
} from "./actions";

export type ProductsActionTypes =
  | FetchProductsStart
  | FetchProductsSuccess
  | FetchProductsFailure;

export type ProductsThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootProps,
  null,
  ProductsActionTypes
>;
