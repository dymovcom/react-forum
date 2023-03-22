import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  test("with render", () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText("TEST")).toBeInTheDocument();
  });

  test("with default variant", () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText("TEST")).toHaveClass("primary");
  });

  test("with primary variant", () => {
    render(<Button variant="primary">TEST</Button>);
    expect(screen.getByText("TEST")).toHaveClass("primary");
  });

  test("with secondary variant", () => {
    render(<Button variant="secondary">TEST</Button>);
    expect(screen.getByText("TEST")).toHaveClass("secondary");
  });

  test("with ghost variant", () => {
    render(<Button variant="ghost">TEST</Button>);
    expect(screen.getByText("TEST")).toHaveClass("ghost");
  });

  test("with clear variant", () => {
    render(<Button variant="clear">TEST</Button>);
    expect(screen.getByText("TEST")).toHaveClass("clear");
  });

  test("with default size", () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText("TEST")).toHaveClass("m");
  });

  test("with xs size", () => {
    render(<Button size="xs">TEST</Button>);
    expect(screen.getByText("TEST")).toHaveClass("xs");
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

  test("with default form", () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText("TEST")).toHaveClass("default");
  });

  test("with brick form", () => {
    render(<Button form="brick">TEST</Button>);
    expect(screen.getByText("TEST")).toHaveClass("brick");
  });

  test("with round form", () => {
    render(<Button form="round">TEST</Button>);
    expect(screen.getByText("TEST")).toHaveClass("round");
  });

  test("with brick-round form", () => {
    render(<Button form="brick-round">TEST</Button>);
    expect(screen.getByText("TEST")).toHaveClass("brick-round");
  });

  test("with round-brick form", () => {
    render(<Button form="round-brick">TEST</Button>);
    expect(screen.getByText("TEST")).toHaveClass("round-brick");
  });

  test("with brick-default form", () => {
    render(<Button form="brick-default">TEST</Button>);
    expect(screen.getByText("TEST")).toHaveClass("brick-default");
  });

  test("with default-brick form", () => {
    render(<Button form="default-brick">TEST</Button>);
    expect(screen.getByText("TEST")).toHaveClass("default-brick");
  });
});
