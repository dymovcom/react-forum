import { render, screen } from "@testing-library/react";
import { Button } from "shared/ui/button/Button";

describe("Button", () => {
  test("with render", () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText("TEST")).toBeInTheDocument();
  });

  test("with default theme", () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText("TEST")).toHaveClass("primary");
  });

  test("with clear theme", () => {
    render(<Button variant="clear">TEST</Button>);
    expect(screen.getByText("TEST")).toHaveClass("clear");
  });

  test("with primary theme", () => {
    render(<Button variant="primary">TEST</Button>);
    expect(screen.getByText("TEST")).toHaveClass("primary");
  });
});
