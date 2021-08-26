import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Header from "../Header";

import ReduxProvider from "../../../testUtils/reduxProviderSanityCheck";

const MockHeader = () => {
  return (
    <ReduxProvider>
      <Header />
    </ReduxProvider>
  );
};
 
describe("Header component", () => {
  it("should render the header component with the class of header", () => {
    //Arrange
    render(<MockHeader />);

    //Act
    const header = screen.getByTestId(/header/i);

    //Assert
    expect(header).toBeInTheDocument();
  });

  it(`should render the Drawer Component if the menu button was clicked and drawer to have the class "drawer--active"`, () => {
    //Arrange
    render(<MockHeader />);
    //Act
    const hamburgerMenu = screen.getByTestId(/hamburger/i);
    userEvent.click(hamburgerMenu);

    //Assert
    const drawer = screen.getByTestId(/drawer/i);
    
    expect(drawer).toBeInTheDocument();
    expect(drawer).toHaveClass("drawer--active");
  });

  it(`should open the searchBar when the search icon is clicked"`, () => {
    //Arrange
    render(<MockHeader />);
    //Act
    const searchIcon = screen.getByTestId(/search-icon/i);
    userEvent.click(searchIcon);

    //Assert
    const icon = screen.getByTestId(/fa-times/i);
    
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass("fa-times");
  });
});
