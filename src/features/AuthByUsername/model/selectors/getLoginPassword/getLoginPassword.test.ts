import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { getLoginPassword } from "./getLoginPassword";

describe("getLoginPassword", () => {
  test("with return password", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: "password",
      },
    };

    expect(getLoginPassword(state as StateSchema)).toEqual("password");
  });

  test("with empty state", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginPassword(state as StateSchema)).toEqual("");
  });
});
