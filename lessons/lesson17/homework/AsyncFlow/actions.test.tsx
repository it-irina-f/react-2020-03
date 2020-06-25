import { loadingAction, successAction, errorAction } from "./actions";
import { LOADING, SUCCESS, ERROR } from "./const";

describe("actions test", () => {
  it("must be created action=LOADING", () => {
    const payload = { isLoading: true };
    expect(loadingAction(payload)).toEqual({
      type: LOADING,
      payload: payload,
    });
  });

  it("must be created action=SUCCESS", () => {
    const payload = { isLoading: false, data: "data", error: undefined };
    expect(successAction(payload)).toEqual({
      type: SUCCESS,
      payload,
    });
  });

  it("must be created action=ERROR", () => {
    const payload = { isLoading: false, data: undefined, error: "error" };
    expect(errorAction(payload)).toEqual({
      type: ERROR,
      payload,
    });
  });
});
