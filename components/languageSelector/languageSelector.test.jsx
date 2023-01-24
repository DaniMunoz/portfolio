import { render, screen, fireEvent } from "@testing-library/react";
//import userEvent from "@testing-library/user-event";
import LanguageSelector from "./languageSelector";
import { Provider } from "react-redux";
import store from "../../src/store/store";

test("Example 1 renders successfully", () => {
  render(
    <Provider store={store}>
      <LanguageSelector />
    </Provider>
  );

  const element = screen.getByRole("languageSelector");

  expect(element).toBeInTheDocument();
});

test("test dropdown spanish", async () => {
  render(
    <Provider store={store}>
      <LanguageSelector />
    </Provider>
  );

  fireEvent.change(screen.getByRole('languageSelector'), { target: { value: "es" } });
  expect(screen.getByTestId("en").selected).toBe(false);
  expect(screen.getByTestId("es").selected).toBe(true);
  expect(
    await screen.findByText("Español")
  ).toBeInTheDocument();
});

test("test dropdown english", async () => {
    render(
      <Provider store={store}>
        <LanguageSelector />
      </Provider>
    );
  
    fireEvent.change(screen.getByRole('languageSelector'), { target: { value: "en" } });
    expect(screen.getByTestId("en").selected).toBe(true);
    expect(screen.getByTestId("es").selected).toBe(false);
    expect(
      await screen.findByText("English")
    ).toBeInTheDocument();
  });
  