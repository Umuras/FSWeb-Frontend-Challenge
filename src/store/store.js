import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { reducer } from "./reducers/userReducer";
import logger from "redux-logger";

export const myStore = createStore(reducer, applyMiddleware(logger, thunk));
