import { combineReducers } from "redux";
import { createStore } from "redux-dynamic-modules";
import { getSagaExtension } from "redux-dynamic-modules-saga";

import { authSlice, getAuthModule } from "@/modules/Auth";
import { todoSlice, getToDoModule } from "@/modules/ToDoList";

const reducer = combineReducers({
  login: authSlice.reducer,
  todo: todoSlice.reducer,
});

export type ToDoState = ReturnType<typeof reducer>;

export const store = createStore<ToDoState>(
  { extensions: [getSagaExtension({})] },
  getAuthModule()
);
