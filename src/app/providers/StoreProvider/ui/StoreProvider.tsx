import { ReducersMapObject } from "@reduxjs/toolkit";
import { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "../config/store";
import { StateSchema } from "../config/StateSchema";

interface StoreProviderProps {
  children: ReactNode;
  initialState?: StateSchema;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider: FC<StoreProviderProps> = (props) => {
  const { children, initialState, asyncReducers } = props;

  const store = createReduxStore({
    initialState,
    asyncReducers: asyncReducers as ReducersMapObject<StateSchema>,
  });

  return <Provider store={store}>{children}</Provider>;
};
