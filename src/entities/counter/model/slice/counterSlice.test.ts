import { CounterSchema } from "../types/counterSchema";
import { counterActions, counterReducer } from "./counterSlice";

describe("counterSlice", () => {
  let state: CounterSchema;
  beforeEach(() => {
    state = { value: 42 };
  });

  test("with decrement", () => {
    expect(counterReducer(state, counterActions.decrement())).toEqual({
      value: 41,
    });
  });

  test("with increment", () => {
    expect(counterReducer(state, counterActions.increment())).toEqual({
      value: 43,
    });
  });

  test("with work empty state", () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({
      value: 1, // initialState = {value: 0}
    });
  });
});
