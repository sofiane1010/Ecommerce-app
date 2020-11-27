import { combineReducers } from "redux";
import user from "./user";
import basket from "./basket";
import shop from "./shop";

const rootReducer = combineReducers({ user, basket, shop });

export default rootReducer;
