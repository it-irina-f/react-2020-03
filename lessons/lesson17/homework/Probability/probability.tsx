import { Middleware, AnyAction } from "redux";

export const probabilityMiddleware: Middleware = () => (next) => (
  action: AnyAction
) => {
  if (action.payload && action.payload.probability) {
    if (action.payload.probability > 0.5) {
      return next(action);
    }
  } else {
    return next(action);
  }
};
