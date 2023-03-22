import { AsyncThunkAction } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import axios, { AxiosStatic } from "axios";

type ActionCreatorType<Return, Args, RejectedValue> = (
  args: Args,
) => AsyncThunkAction<Return, Args, { rejectValue: RejectedValue }>;

jest.mock("axios");

const mockedAxios = jest.mocked(axios);

export class TestAsyncThunk<Return, Args, RejectedValue> {
  dispatch: jest.MockedFn<any>;

  getState: () => StateSchema;

  actionCreator: ActionCreatorType<Return, Args, RejectedValue>;

  api: jest.MockedFunctionDeep<AxiosStatic>;

  constructor(actionCreator: ActionCreatorType<Return, Args, RejectedValue>) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn();
    this.api = mockedAxios;
  }

  async callThunk(args: Args) {
    const action = this.actionCreator(args);

    const result = await action(this.dispatch, this.getState, {
      api: this.api,
    });

    return result;
  }
}
