import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import MainContent from "./mainContent";
import store from "../../src/store/store";

describe("MainContent", () => {

  it('renders the MainContent component', () => {
    //const { getByText } = render(<Header />);
    render(<Provider store={store}><MainContent /></Provider>);
    expect(screen.getByRole('article')).toBeInTheDocument();
  });

});
