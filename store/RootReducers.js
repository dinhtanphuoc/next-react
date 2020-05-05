import { combineReducers } from "redux";
import setting from "./setting/reducer";
import trangchu from "./trangchu/reducer";
import dichvu from "./dichvu/reducer";

const rootReducer = combineReducers({
  setting,
  trangchu,
  dichvu,
});

export default rootReducer;
