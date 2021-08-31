import PRODUCTS_ACTION_TYPES from "../types";
import productsReducer from "../products.reducers";
import GetProductsMock from "../../../__mocks__/products/GetProductsMock";

const initialState = {
  products: null,
  isFetching: false,
  errorMessage: undefined,
};

describe("productsReducer", () => {
  it("should return initial state", () => {
    expect(productsReducer(undefined, {})).toEqual(initialState);
  });

  it("should set isFetching to true if fetchingproductsStart action", () => {
    expect(
      productsReducer(initialState, {
        type: PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_START,
      }).isFetching
    ).toBe(true);
  });

  it("should set isFetching to false and products to payload if fetchingproductsSuccess", () => {

    expect(
      productsReducer(initialState, {
        type: PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS,
        payload: GetProductsMock,
      })
    ).toEqual({
      ...initialState,
      isFetching: false,
      products: GetProductsMock,
    });
  });

  it("should set isFetching to false and errorMessage to payload if fetchingproductsFailure", () => {
    expect(
      productsReducer(initialState, {
        type: PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_FAILURE,
        payload: "error",
      })
    ).toEqual({
      ...initialState,
      isFetching: false,
      errorMessage: "error",
    });
  });
});
