import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { fork } from "redux-saga/effects";

import { authSlice, authSaga } from "components/modules/Auth";

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield fork(authSaga);
}

const reducer = combineReducers({
  login: authSlice.reducer,
});

export const store = configureStore({
  reducer,
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export type ToDoState = ReturnType<typeof reducer>;
