import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { phpReducer } from "./phpReducer.js";
import { modalsReducer } from "./modalsReducer.js";

const rootReducer = combineReducers({
  php: phpReducer,
  modals: modalsReducer,
});
export const store = createStore(rootReducer, composeWithDevTools());