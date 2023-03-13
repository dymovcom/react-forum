import { createSelector } from "@reduxjs/toolkit";
import { getLoginState } from "../getLoginState";

export const getLoginError = createSelector(
  getLoginState,
  (state) => state?.error || null,
);
