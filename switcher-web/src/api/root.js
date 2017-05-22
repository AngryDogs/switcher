import { combineReducers } from 'redux';
import token from './token/reducer';
import device from './device/reducer';

export default combineReducers({
  token, device
});
