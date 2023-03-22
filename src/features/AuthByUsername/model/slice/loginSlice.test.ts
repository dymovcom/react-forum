import { loginReducer, loginActions } from "./loginSlice";
import { LoginSchema } from "../types/LoginSchema";

describe("loginSlice", () => {
  test("with set username", () => {
    const state: DeepPartial<LoginSchema> = {
      username: "",
    };
    expect(
      loginReducer(state as LoginSchema, loginActions.setUsername("username")),
    ).toEqual({
      username: "username",
    });
  });

  test("with set password", () => {
    const state: DeepPartial<LoginSchema> = {
      password: "",
    };
    expect(
      loginReducer(state as LoginSchema, loginActions.setPassword("password")),
    ).toEqual({
      password: "password",
    });
  });
});
