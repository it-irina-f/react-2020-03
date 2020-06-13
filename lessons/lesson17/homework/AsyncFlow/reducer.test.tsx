import { reducer } from "./reducer";

const defaultState = {
  isLoading: false,
  data: undefined,
  error: undefined,
};

describe("reducer test", () => {
  it("call reducer with action=LOADING", () => {
    expect(reducer(defaultState, { type: "LOADING" })).toEqual({
      isLoading: true,
      data: undefined,
      error: undefined,
    });
  });
  it("call reducer with action=ERROR", () => {
    expect(
      reducer(defaultState, {
        type: "ERROR",
        error: { message: "error" },
      })
    ).toEqual({
      isLoading: false,
      data: undefined,
      error: { message: "error" },
    });
  });
  it("call reducer with action=SUCCESS", () => {
    expect(reducer(defaultState, { type: "SUCCESS", data: "data" })).toEqual({
      isLoading: false,
      data: "data",
      error: undefined,
    });
  });
  it("call reducer without action", () => {
    expect(reducer(defaultState, { type: undefined })).toEqual(defaultState);
  });
});
