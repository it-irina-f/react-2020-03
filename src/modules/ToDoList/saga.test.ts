import { expectSaga, testSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { select } from "redux-saga/effects";
import { getToDosFromSession, saveToDosToSession, todoSaga } from "./saga";
import { actions, selectors, reducer } from "./reducer";

import { getToDosSession, setToDosSession } from "@/api/auth";

describe("ToDoList saga test", () => {
  const list = [
    { id: 1602075826692, text: "оплатить жкх", isComplete: false },
    { id: 1602075828961, text: "убрать квартиру", isComplete: true },
    { id: 1602075831860, text: "погулять с собакой", isComplete: false },
    { id: 1602075839553, text: "помыть посуду", isComplete: false },
  ];

  const list2 = [
    { id: 1602075826692, text: "оплатить жкх", isComplete: false },
    { id: 1602075831860, text: "погулять с собакой", isComplete: false },
    { id: 1602075839553, text: "помыть посуду", isComplete: false },
  ];

  const appState = {
    list: list,
    isLoading: false,
    editId: -1,
    filter: "all",
    queryResult: [],
    textInput: "",
  };

  const loginState = {
    username: "irina",
    status: 1,
  };

  it("getToDosFromSession success if not-empty todos", () => {
    return expectSaga(getToDosFromSession)
      .withReducer(reducer)
      .provide([
        [select(selectors.login), loginState],
        [matchers.call.fn(getToDosSession), JSON.stringify(list)],
      ])
      .put(actions.setList(list))
      .hasFinalState(appState)
      .run();
  });

  it("getToDosFromSession success if empty todos", () => {
    return expectSaga(getToDosFromSession)
      .withReducer(reducer)
      .provide([
        [select(selectors.login), loginState],
        [matchers.call.fn(getToDosSession), ""],
      ])
      .put(actions.setList([]))
      .hasFinalState({ ...appState, list: [] })
      .run();
  });

  it("save list in session", () => {
    return expectSaga(saveToDosToSession)
      .provide([
        [select(selectors.todo), appState],
        [select(selectors.login), loginState],
      ])
      .call(setToDosSession, list, loginState.username)
      .run();
  });
});
