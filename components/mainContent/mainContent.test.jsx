import { render, screen, fireEvent } from "@testing-library/react";
import { Provider, useSelector } from "react-redux";
import MainContent from "./mainContent";
import store from "../../src/store/store";

describe("MainContent", () => {

  it('renders the MainContent component', () => {
    //const { getByText } = render(<Header />);
    render(<Provider store={store}><MainContent /></Provider>);
    expect(screen.getByRole('article')).toBeInTheDocument();
  });

});
