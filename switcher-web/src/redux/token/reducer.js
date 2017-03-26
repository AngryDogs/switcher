const initialState = {
  token: '',
}


export default function token(state = initialState, response) {
  switch (response.type) {
    case 'TOKEN_VERIFIED':
      return state;
    default:
      return state;
  }
}
