import { IProducts } from './../../models/products/Products';
import PRODUCTS_ACTION_TYPES from "./types";
import client from "../../config/shopify.client";
import {
  FetchProductsStart,
  FetchProductsSuccess,
  FetchProductsFailure,
} from "../../models/products/actions";

import { ProductsThunk } from "../../models/products/index";

export const fetchProductsStart = (): FetchProductsStart => {
  return {
    type: PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_START,
  };
};

export const fetchProductsSuccess = (
  products: IProducts[]
): FetchProductsSuccess => {
  return {
    type: PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS,
    payload: products,
  };
};

export const fetchProductsFailure = (
  errorMessage: string
): FetchProductsFailure => {
  return {
    type: PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_FAILURE,
    payload: errorMessage,
  };
}; 

export const fetchAllProducts = (): ProductsThunk => {
  return async (dispatch) => {
    dispatch(fetchProductsStart());

    const fetchData = async () => {
      const response = await client.product.fetchAll();
      return response;
    };

    try {
      const products = await fetchData();
      dispatch(fetchProductsSuccess(products));
    } catch (error) {
      dispatch(fetchProductsFailure(error.message));
    }
  };
};
