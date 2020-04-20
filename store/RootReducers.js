import { combineReducers } from 'redux';
import setting from './setting/reducer';

const rootReducer = combineReducers({
  setting,
});

export default rootReducer;
