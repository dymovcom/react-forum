import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { counterReducer } from "entities/counter";
import { userReducer } from "entities/user";
import { isDev } from "shared/lib/isDev";
import { StateSchema } from "./StateSchema";

export const createReduxStore = (initialState?: StateSchema) => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
  };

  return configureStore<StateSchema>({
    reducer: rootReducer,
    devTools: isDev,
    preloadedState: initialState,
  });
};
