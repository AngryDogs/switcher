const initialState = {
  error: '',
  verifyed: false,
  verifing: false,
}


export default function token(state = initialState, response) {
  switch (response.type) {
    case 'LOGIN':
      return {...state, verifyed: true};
    case 'LOGIN_ERROR':
      return {...state, error: response.err, verifyed: false};
    case 'START_VERIFING':
      return {...state, verifing: true, verifyed: false};
    case 'TOKEN_VERIFIED':
      return {...state, verifing: false, verifyed: true};
    case 'TOKEN_ERROR':
      state.error = response.err;
      console.log(response);
      return {...state, verifing: false, verifyed: false, error: response.err};
    default:
      return state;
  }
}
