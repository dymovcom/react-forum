import { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";
import { Story } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { loginReducer } from "features/authByUsername";

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducer,
};
export const StoreDecorator =
  (
    state: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
  ) =>
  (Story: Story) =>
    (
      <StoreProvider
        initialState={state as StateSchema}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
      >
        <Story />
      </StoreProvider>
    );
