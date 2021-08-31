import GetProductsMock from "../../../__mocks__/products/GetProductsMock";
import {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
  fetchAllProducts,
} from "../products.actions";
import PRODUCTS_ACTION_TYPES from "../types";

describe("fetchProductsStart", () => {
  it("should initialize the fetching of the product's data", () => {
    const action = fetchProductsStart();

    expect(action).toEqual({
      type: PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_START,
    });
  });
});

describe("fetchProductsSuccess", () => {
  it("should successfully return the products data", () => {
    const action = fetchProductsSuccess(GetProductsMock);

    expect(action).toEqual({
      type: PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS,
      payload: GetProductsMock,
    });
  });
});

describe("fetchProductsFailure", () => {
  it("should fail the fetching of data and return a string with an error message", () => {
    const errorMessage = "Something went wrong, please try again later";
    const action = fetchProductsFailure(errorMessage);

    expect(action).toEqual({
      type: PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_FAILURE,
      payload: errorMessage,
    });
  });
});

describe("fetchProductsFailure", () => {
  it("should fail the fetching of data and return a string with an error message", () => {
    const errorMessage = "Something went wrong, please try again later";
    const action = fetchProductsFailure(errorMessage);

    expect(action).toEqual({
      type: PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_FAILURE,
      payload: errorMessage,
    });
  });
});

describe("fetchAllProducts", () => {
  it("should dispatch fetchProductsSuccess and return", () => {
    const mockActionCreator = fetchAllProducts();
    const mockDispatch = jest.fn();
    mockActionCreator(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(fetchProductsStart());
  });
});
