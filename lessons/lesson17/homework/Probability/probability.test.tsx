import { probabilityMiddleware } from "./probability";

describe("test for probabilityMiddleware", () => {
  const create = () => {
    const store = {
      getState: jest.fn(() => ({})),
      dispatch: jest.fn(),
    };
    const next = jest.fn();

    const invoke = (action: any) => probabilityMiddleware(store)(next)(action);

    return { store, next, invoke };
  };

  it("should be  next called action when invoke=LOADING", () => {
    const { next, invoke } = create();
    const action = { type: "LOADING", isLoading: true };
    invoke(action);
    expect(next).toHaveBeenCalledWith(action);
  });

  it("should be execute action when probability >0.5", () => {
    const { next, invoke } = create();
    const action = { type: "ANALYTICS_CLICK", payload: { probability: 0.6 } };
    invoke(action);
    expect(next).toBeCalledTimes(1);
    expect(next).toBeCalledWith(action);
  });

  it("should be not execute action when probability <=0.5", () => {
    const { next, invoke } = create();
    const action = { type: "ANALYTICS_CLICK", payload: { probability: 0.1 } };

    invoke(action);

    expect(next).toBeCalledTimes(0);
  });
});
