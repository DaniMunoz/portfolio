import { render, fireEvent, screen } from "@testing-library/react";
import BackendList from "./backendList";

describe("BackendList", () => {
  it("renders the BackendList component", () => {
    render(<BackendList />);
    expect(screen.getByRole("backendSelectorButton")).toBeInTheDocument();
  });

  it("renders the BackendList component", async () => {
    render(<BackendList />);
    const backendSelectorButton = screen.getByRole("backendSelectorButton");
    fireEvent.click(backendSelectorButton);
    expect(await screen.findAllByRole("option")).toHaveLength(5);
  });
});
