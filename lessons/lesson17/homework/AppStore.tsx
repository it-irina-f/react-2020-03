import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./AsyncFlow/reducer";
import { thunkMiddleware } from "./Thunk/thunk";

export const store = configureStore({
  reducer,
  middleware: [thunkMiddleware],
});
