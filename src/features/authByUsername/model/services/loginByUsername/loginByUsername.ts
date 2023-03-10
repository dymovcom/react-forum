import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User, userActions } from "entities/user";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  { rejectValue: string }
>("login/loginByUsername", async (authData, thunkAPI) => {
  try {
    const { data } = await axios.post<User>(
      "http://localhost:5000/login",
      authData,
    );

    if (!data) {
      throw new Error();
    }

    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(data));
    thunkAPI.dispatch(userActions.setAuthData(data));

    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue("login_by_username_error");
  }
});
