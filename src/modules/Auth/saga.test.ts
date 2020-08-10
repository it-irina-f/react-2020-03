import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { checkUserSession, saveUserSession } from "./saga";
import { CheckState, actions, reducer } from "./reducer";

import { getUserSession, login } from "@/api/auth";

describe("Auth saga test", () => {
  it("checkUserSession success", () => {
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
  it("checkUserSession fail", () => {
    const userName = "";
    return expectSaga(checkUserSession)
      .withReducer(reducer)
      .provide([[matchers.call.fn(getUserSession), userName]])
      .put(actions.logout())
      .hasFinalState({
        username: userName,
        status: CheckState.failed,
      })
      .run();
  });
  it("checkUserSession", () => {
    const userName = "UserName";
    return expectSaga(saveUserSession, {
      type: actions.login.type,
      payload: userName,
    })
      .call(login, userName)
      .run();
  });
});
