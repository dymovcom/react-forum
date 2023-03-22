import axios from "axios";
import { userActions } from "entities/User";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk";
import { loginByUsername } from "./loginByUsername";

jest.mock("axios");

const mockedAxios = jest.mocked(axios);

describe("loginByUsername", () => {
  test("with fulfilled", async () => {
    const userValue = { username: "username", id: 1 };
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({
      username: "username",
      password: "password",
    });

    expect(thunk.dispatch).toHaveBeenCalledWith(
      userActions.setAuthData(userValue),
    );
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(userValue);
  });

  test("with rejected", async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({
      username: "username",
      password: "password",
    });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toEqual("login_by_username_error");
  });
});
