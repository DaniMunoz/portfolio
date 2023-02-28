import { render, fireEvent, screen } from "@testing-library/react";
import BackendList from "./backendList";
import { Provider } from "react-redux";
import store from "../../src/store/store";

describe("BackendList", () => {
  it("renders the BackendList component", () => {
    render(<Provider store={store}><BackendList /></Provider>);
    expect(screen.getByRole("backendSelectorButton")).toBeInTheDocument();
  });

  it("renders the BackendList component", async () => {
    render(<Provider store={store}><BackendList /></Provider>);
    const backendSelectorButton = screen.getByRole("backendSelectorButton");
    fireEvent.click(backendSelectorButton);
    expect(await screen.findAllByRole("option")).toHaveLength(5);
  });
});
