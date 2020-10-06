import { ISagaModule } from "redux-dynamic-modules-saga";

import { reducer } from "./reducer";
import { todoSaga } from "./saga";

export const getToDoModule = (): ISagaModule<typeof reducer> => ({
  id: "todo",
  reducerMap: {
    todo: reducer,
  },
  sagas: [todoSaga],
});
