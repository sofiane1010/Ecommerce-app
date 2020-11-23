import { combineReducers } from "redux";
import user from "./user";
import shop from "./shop";

const rootReducer = combineReducers({ user, shop });

export default rootReducer;
