import { changeDeviceState } from './calls';

export const deviceState = () => {
  return dispatch => {
    dispatch({ type: 'CHANGE_DEVICE_STATE' });
    changeDeviceState();
  }
}
