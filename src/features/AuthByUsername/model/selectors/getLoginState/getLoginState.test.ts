import { StateSchema } from "app/providers/StoreProvider";
import { getLoginState } from "./getLoginState";

describe("getLoginState", () => {
  test("with return state", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: "username",
        password: "password",
        isLoading: true,
        error: "error",
      },
    };

    expect(getLoginState(state as StateSchema)).toEqual({
      username: "username",
      password: "password",
      isLoading: true,
      error: "error",
    });
  });

  test("with empty state", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginState(state as StateSchema)).toEqual(undefined);
  });
});
