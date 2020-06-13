import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./AsyncFlow/reducer";

export const store = configureStore({
  reducer,
});
