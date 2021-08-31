import Products from "../Products";
import { render, screen } from "@testing-library/react";
import GetProductsMock from "../../../__mocks__/products/GetProductsMock";
import ReduxProvider from "../../../testUtils/reduxProviderSanityCheck";

const MockProducts = () => {
    return (
      <ReduxProvider>
        <Products />
      </ReduxProvider>
    );
  };
  

describe("Products", () => {
  it("should render the Product page component with the class of header", () => {
    //Arrange
    render(<MockProducts />);

    //Act
    const productPage = screen.getByTestId(/products/i);

    //Assert
    expect(productPage).toBeInTheDocument();
  });
});
