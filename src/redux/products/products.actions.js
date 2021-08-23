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
      console.log("response: ", response);
      if (!response.ok) {
        throw new Error("Could not fetch data!");
      }

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
