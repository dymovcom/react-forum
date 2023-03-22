import { userEvent } from "@storybook/testing-library";
import { screen } from "@testing-library/react";
import { componentRender } from "shared/lib/tests/componentRender";
import { Counter } from "./Counter";

describe("Counter", () => {
  const initialState = {
    counter: {
      value: 42,
    },
  };

  beforeEach(() => {
    componentRender(<Counter />, {
      initialState,
    });
  });

  test("with render", () => {
    expect(screen.getByTestId("counter-value")).toHaveTextContent("42");
  });

  test("with decrement", () => {
    userEvent.click(screen.getByTestId("counter-decrement-btn"));
    expect(screen.getByTestId("counter-value")).toHaveTextContent("41");
  });

  test("with increment", () => {
    userEvent.click(screen.getByTestId("counter-increment-btn"));
    expect(screen.getByTestId("counter-value")).toHaveTextContent("43");
  });
});
