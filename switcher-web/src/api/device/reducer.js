const initialState = {
  deviceState: false,
  devices: [],
}


export default function device(state = initialState, response) {
  switch (response.type) {
    case 'CHANGE_DEVICE_STATE':
      const { deviceState } = state;
      return {...state, deviceState: !deviceState};
    default:
      return state;
  }
}
