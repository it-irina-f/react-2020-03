import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./AsyncFlow/reducer";
import { thunkMiddleware } from "./Thunk/thunk";
import { probabilityMiddleware } from "./Probability/probability";

export const store = configureStore({
  reducer,
  middleware: [thunkMiddleware, probabilityMiddleware],
});
