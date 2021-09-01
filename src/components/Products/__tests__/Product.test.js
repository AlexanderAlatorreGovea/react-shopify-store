import Products from "../Products";
import { render, screen, waitFor, act } from "@testing-library/react";
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
  it("should render the Product page component", () => {
    //Arrange
    render(<MockProducts />);

    //Act
    const productPage = screen.getByTestId(/products/i);

    //Assert
    expect(productPage).toBeInTheDocument();
  });

  //   it("should render the spinner if is Fetching is true", () => {
  //     //Arrange
  //     render(<MockProducts />);

  //     //Act
  //     const isFetching = true;
  //     const spinner = screen.getByTestId(/spinner/i);

  //     //Assert
  //     isFetching
  //       ? expect(spinner).toBeInTheDocument()
  //       : expect(spinner).not.toBeInTheDocument();
  //   });

  it("should render the list of products if request succeeds", async () => {
    global.fetch = jest.fn(() => Promise.resolve({
        json: () => 
            Promise.resolve({
                products: ''
            })
    }))

    expect.assertions(1);
    render(<MockProducts />);

    const listProductElements = await screen.findAllByRole("img");
    expect(listProductElements).toHaveLength(0);
  });

  it("should not render the list of products if request succeeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => GetProductsMock,
    });

    expect.assertions(1);
    render(<MockProducts />);

    const listProductElements = await screen.findAllByRole("img");
    expect(listProductElements).not.toHaveLength(0);
  });
});
