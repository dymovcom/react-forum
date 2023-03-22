import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { createReducerManager } from "app/providers/StoreProvider/config/reducerManager";
import { counterReducer } from "entities/Counter";
import { userReducer } from "entities/User";
import { $api } from "shared/api";
import { isDev } from "shared/lib/isDev";
import { StateSchema } from "./StateSchema";

interface CreateReduxStoreOptions {
  initialState?: StateSchema;
  asyncReducers?: ReducersMapObject<StateSchema>;
}

export const createReduxStore = (options?: CreateReduxStoreOptions) => {
  const { initialState, asyncReducers } = options || {};
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducer);

  const store = configureStore({
    reducer: reducerManager.reduce,
    devTools: isDev,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            api: $api,
          },
        },
      }),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
