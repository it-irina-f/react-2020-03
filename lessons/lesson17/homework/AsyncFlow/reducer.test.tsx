import { reducer } from "./reducer";
import { loadingAction, successAction, errorAction } from "./actions";

const defaultState = {
  isLoading: false,
  data: undefined,
  error: undefined,
  probability: undefined,
};

describe("reducer test", () => {
  it("call reducer with action=LOADING", () => {
    const payload = { isLoading: true };
    expect(reducer(defaultState, loadingAction(payload))).toEqual({
      isLoading: true,
      data: undefined,
      error: undefined,
      probability: undefined,
    });
  });
  it("call reducer with action=ERROR", () => {
    const payload = { error: "error" };
    expect(reducer(defaultState, errorAction(payload))).toEqual({
      isLoading: false,
      data: undefined,
      error: "error",
      probability: undefined,
    });
  });
  it("call reducer with action=SUCCESS", () => {
    const payload = { data: "data" };
    expect(reducer(defaultState, successAction(payload))).toEqual({
      isLoading: false,
      data: "data",
      error: undefined,
      probability: undefined,
    });
  });
  it("call reducer without action", () => {
    expect(reducer(defaultState, { type: undefined })).toEqual(defaultState);
  });
});
