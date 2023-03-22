import { createSelector } from "@reduxjs/toolkit";
import { getLoginState } from "../getLoginState";

export const getLoginIsLoading = createSelector(
  getLoginState,
  (state) => state?.isLoading || false,
);
