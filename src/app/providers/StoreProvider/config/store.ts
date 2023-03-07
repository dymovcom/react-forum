import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { counterReducer } from "entities/counter";
import { userReducer } from "entities/user";
import { loginReducer } from "features/authByUsername";
import { isDev } from "shared/lib/isDev";
import { StateSchema } from "./StateSchema";

export const createReduxStore = (initialState?: StateSchema) => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
    loginForm: loginReducer,
  };

  return configureStore<StateSchema>({
    reducer: rootReducer,
    devTools: isDev,
    preloadedState: initialState,
  });
};

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
