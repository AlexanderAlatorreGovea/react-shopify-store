import Products from "../Products";
import { render, screen, waitFor, act } from "@testing-library/react";
import GetProductsMock from "../../../__mocks__/products/GetProductsMock";
import ReduxProvider from "../../../testUtils/reduxProviderSanityCheck";

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

  it("should not render the list of products if request succeeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => GetProductsMock,
    });

    expect.assertions(2);
    render(<MockProducts />);
    const spinner = screen.getByTestId(/spinner/i);
    const listProductElements = await screen.findAllByRole("img");
 
    expect(listProductElements).not.toHaveLength(0);
    expect(spinner).not.toBeInTheDocument();
  });
});
