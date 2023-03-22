import { AsyncThunkAction } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";

type ActionCreatorType<Return, Args, RejectedValue> = (
  args: Args,
) => AsyncThunkAction<Return, Args, { rejectValue: RejectedValue }>;

export class TestAsyncThunk<Return, Args, RejectedValue> {
  dispatch: jest.MockedFn<any>;

  getState: () => StateSchema;

  actionCreator: ActionCreatorType<Return, Args, RejectedValue>;

  constructor(actionCreator: ActionCreatorType<Return, Args, RejectedValue>) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn();
  }

  async callThunk(args: Args) {
    const action = this.actionCreator(args);

    const result = await action(this.dispatch, this.getState, undefined);

    return result;
  }
}
