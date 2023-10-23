import { rootReducer } from "../reducer/combineReducers";
import { legacy_createStore } from "redux";

export const store = legacy_createStore(rootReducer)