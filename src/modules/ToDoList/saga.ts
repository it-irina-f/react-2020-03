import { isEmpty } from "ramda";
import { select, takeEvery, take, call, put, fork } from "redux-saga/effects";

import { getToDosSession, setToDosSession } from "@/api/auth";

import { actions, selectors } from "./reducer";

export function* getToDosFromSession() {
  let todos = yield call(getToDosSession);

  if (isEmpty(todos) || todos === null) {
    todos = [];
  } else {
    todos = JSON.parse(todos);
  }

  yield put(actions.setList(todos));
}

export function* saveToDosToSession() {
  const data = yield select(selectors.todo);
  yield call(setToDosSession, data.list);
}

export function* todoSaga() {
  yield fork(getToDosFromSession);
  yield takeEvery(actions.addListItem.type, saveToDosToSession);
  yield takeEvery(actions.toggleComplete.type, saveToDosToSession);
  yield takeEvery(actions.deleteItem.type, saveToDosToSession);
  yield takeEvery(actions.saveItem.type, saveToDosToSession);
}
