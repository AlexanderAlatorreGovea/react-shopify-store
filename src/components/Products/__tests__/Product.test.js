import Products from "../Products";
import { render, screen, waitFor } from "@testing-library/react";
import GetProductsMock from "../../../__mocks__/products/GetProductsMock";
import ReduxProvider from "../../../testUtils/reduxProviderSanityCheck";
import { fetchAllProducts } from "../../../redux/products/products.actions";

const MockProducts = () => {
  return (
    <ReduxProvider>
      <Products />
    </ReduxProvider>
  );
};

describe("Products' Page", () => {
  let wrapper;

  beforeEach(() => {
    const mockProps = { 
        products: GetProductsMock, 
        isFetching: false, 
        errorMessage: '',
        fetchAllProducts: jest.fn() 
    };
    wrapper = render(<MockProducts { ...mockProps } />);
  });

  it('should render Product Page without crashing', () => {
    const mockProps = { 
        products: GetProductsMock, 
        isFetching: false, 
        errorMessage: '',
        fetchAllProducts: jest.fn() 
    };
      expect(wrapper).toMatch(render(<MockProducts {...mockProps} />))
  })

//   afterEach(() => {
//     global.fetch = originalFetch;
//   });

  it("should render the Product page component", () => {
    //Arrange
    render(<MockProducts />);

    //Act
    const productPage = screen.getByTestId(/products/i);

    //Assert
    expect(productPage).toBeInTheDocument();
  });

  it("should render the spinner if is Fetching is true", () => {
    //Arrange
    render(<MockProducts />);

    //Act
    const isFetching = true;
    const spinner = screen.getByTestId(/spinner/i);

    //Assert
    isFetching
      ? expect(spinner).toBeInTheDocument()
      : expect(spinner).not.toBeInTheDocument();
  });

  it("should render the list of products with a length of 1 if isFetching is false and product array exists", async () => {
    //Arrange
    //render(<MockProducts />);
    //await screen.getAllByTestId(/product-wrapper/i);
    //Act
    //const productWrapper = await screen.getAllByTestId(/product-wrapper/i);
    //expect.assertions(1)
    //Assert
    //return expect(productWrapper).toBeInTheDocument();
  });
});

it("gets people", () => {
  const mockFetch = jest.fn().mockReturnValue(
    Promise.resolve({
      json: () =>
        Promise.resolve({
          products: GetProductsMock,
        }),
    })
  );
  expect.assertions(1);
  return fetchAllProducts(mockFetch).then((data) => {
    expect(mockFetch.mock.calls.length.toBe(1));
  });
});
