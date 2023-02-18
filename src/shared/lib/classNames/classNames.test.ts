import { classNames } from "shared/lib/classNames/classNames";

describe("classNames", () => {
  test("with only class", () => {
    expect(classNames("foo")).toBe("foo");
  });

  test("with object true", () => {
    expect(classNames({ foo: true })).toBe("foo");
  });

  test("with object false", () => {
    expect(classNames({ foo: false })).toBe("");
  });

  test("with object true false", () => {
    expect(classNames({ foo: true, bar: false })).toBe("foo");
  });

  test("with class and object", () => {
    expect(classNames("foo", { bar: true })).toBe("foo bar");
  });

  test("with class and object and class", () => {
    expect(classNames("foo", { bar: true }, "baz")).toBe("foo bar baz");
  });

  test("with not params", () => {
    expect(classNames()).toBe("");
  });
});
