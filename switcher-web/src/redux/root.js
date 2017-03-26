import { combineReducers } from 'redux';
import { token } from './token/reducer';

const rootReducer = combineReducers({
  token,
});

export default rootReducer;
