import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "entities/counter";
import { isDev } from "shared/lib/isDev";
import { StateSchema } from "./StateSchema";

export const createReduxStore = (initialState?: StateSchema) => {
  return configureStore<StateSchema>({
    reducer: {
      counter: counterReducer,
    },
    devTools: isDev,
    preloadedState: initialState,
  });
};
