import PRODUCTS_ACTION_TYPES from "./types";
import client from "../../config/shopify.client";

export const fetchProductsStart = () => {
  return {
    type: PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_START,
  };
};

export const fetchProductsSuccess = (posts) => {
  return {
    type: PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS,
    payload: posts,
  };
};

export const fetchProductsFailure = (errorMessage) => {
  return {
    type: PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_FAILURE,
    payload: errorMessage,
  };
};

export const fetchAllProducts = () => {
  return async (dispatch) => {
    dispatch(fetchProductsStart());

    const fetchData = async () => {
      const response = await client.product.fetchAll();
      return response;
    };

    try {
      const products = await fetchData();
      //const products = await client.product.fetchAll();
      dispatch(fetchProductsSuccess(products));
    } catch (error) {
      dispatch(fetchProductsFailure(error.message));
    }
  };
};
