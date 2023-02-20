import { render, screen } from "@testing-library/react";
import { Button } from "shared/ui/button/Button";

describe("Button", () => {
  test("with render", () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText("TEST")).toBeInTheDocument();
  });

  test("with default theme", () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText("TEST")).toHaveClass("contained");
  });

  test("with clear theme", () => {
    render(<Button variant="clear">TEST</Button>);
    expect(screen.getByText("TEST")).toHaveClass("clear");
  });

  test("with contained theme", () => {
    render(<Button variant="contained">TEST</Button>);
    expect(screen.getByText("TEST")).toHaveClass("contained");
  });

  test("with s size", () => {
    render(<Button size="s">TEST</Button>);
    expect(screen.getByText("TEST")).toHaveClass("s");
  });

  test("with m size", () => {
    render(<Button size="m">TEST</Button>);
    expect(screen.getByText("TEST")).toHaveClass("m");
  });

  test("with l size", () => {
    render(<Button size="l">TEST</Button>);
    expect(screen.getByText("TEST")).toHaveClass("l");
  });
});
