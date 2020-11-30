import { combineReducers } from "redux";
import user from "./user";
import basket from "./basket";
import shop from "./shop";
import sideDrawer from "./sideDrawer";

const rootReducer = combineReducers({ user, basket, shop, sideDrawer });

export default rootReducer;
