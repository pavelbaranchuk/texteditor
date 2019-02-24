import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import synonymsReducer from "./reducers/synonyms";

const logger = createLogger({
  collapsed: true
});

export function configureStore() {
  return createStore(synonymsReducer, applyMiddleware(thunk, logger));
}
