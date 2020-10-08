import { ISagaModule } from "redux-dynamic-modules-saga";

import { reducer } from "./reducer";
import { authSaga } from "./saga";

export const getAuthModule = (): ISagaModule<typeof reducer> => ({
  id: "login",
  reducerMap: {
    login: reducer,
  },
  sagas: [authSaga],
});
