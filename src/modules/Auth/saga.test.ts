import { expectSaga, testSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { checkUserSession, saveUserSession, authSaga } from "./saga";
import { CheckState, actions, reducer } from "./reducer";

import { getUserSession, login, logout } from "@/api/auth";

import { call } from "redux-saga/effects";

describe("Auth saga test: Login success", () => {
  it("checkUserSession success if not-empty username", () => {
    const userName = "UserName";
    return expectSaga(checkUserSession)
      .withReducer(reducer)
      .provide([[matchers.call.fn(getUserSession), userName]])
      .put(actions.login(userName))
      .hasFinalState({
        username: userName,
        status: CheckState.succeed,
      })
      .run();
  });

  it("checkUserSession check login flow steps", () => {
    const userName = "UserName";
    return expectSaga(saveUserSession, {
      type: actions.login.type,
      payload: userName,
    })
      .call(login, userName)
      .run();
  });

  it("loginSaga default login flow success", () => {
    const userName = "Username";
    const saga = testSaga(authSaga);
    saga
      .next()
      .fork(checkUserSession)
      .next(userName)
      .take(actions.login.type)
      .next(actions.login(userName))
      .call(login, userName)
      .finish();
  });
});

describe("Auth saga test: Login fail", () => {
  it("checkUserSession fail when empty username ", () => {
    const userName = "";
    return expectSaga(checkUserSession)
      .withReducer(reducer)
      .provide([[matchers.call.fn(getUserSession), userName]])
      .call(logout)
      .put(actions.logout())
      .hasFinalState({
        username: userName,
        status: CheckState.failed,
      })
      .run();
  });
  it("authSaga with empty username fails", () => {
    const userName = "";
    const saga = testSaga(authSaga);
    saga
      .next()
      .fork(checkUserSession)
      .next(userName)
      .take(actions.login.type)
      .next(actions.login(userName))
      .take(actions.logout.type)
      .finish();
  });
});

describe("AuthSaga: Full flow login", () => {
  it("user login full flow", () => {
    const emptyUserSession = "";
    const userName = "Username";
    const saga = testSaga(authSaga);
    saga
      .next()
      .fork(checkUserSession)
      .save("AuthSagaDefaultLoginFlow")
      .next()
      .take(actions.login.type)
      .next(actions.login(emptyUserSession))
      .take(actions.logout.type)
      .restore("AuthSagaDefaultLoginFlow")
      .next()
      .take(actions.login.type)
      .next(actions.login(userName))
      .call(login, userName)
      .next()
      .take(actions.logout.type)
      .next()
      .call(logout)
      .finish();
  });
});
