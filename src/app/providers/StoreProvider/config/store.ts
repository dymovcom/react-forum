import {
  configureStore,
  DeepPartial,
  ReducersMapObject,
} from "@reduxjs/toolkit";
import { createReducerManager } from "app/providers/StoreProvider/config/reducerManager";
import { counterReducer } from "entities/counter";
import { userReducer } from "entities/user";
import { isDev } from "shared/lib/isDev";
import { StateSchema } from "./StateSchema";

export const createReduxStore = (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
) => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducer);

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: isDev,
    preloadedState: initialState,
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
