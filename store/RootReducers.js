import { combineReducers } from "redux";
import setting from "./setting/reducer";
import trangchu from "./trangchu/reducer";

const rootReducer = combineReducers({
  setting,
  trangchu,
});

export default rootReducer;
