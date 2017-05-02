import {verify, login, refresh} from './calls';

export const verifyToken = () => {
  const token = getCookie("token");
  return dispatch => {
    dispatch({ type: 'START_VERIFING' });
    verify(token).then(res => {
      if(res.token === token) dispatch({ type: 'TOKEN_VERIFIED', ...res });
      else dispatch({ type: 'TOKEN_ERROR', err : 'Token is not valid'});
    }).catch(err => {
      dispatch({ type: 'TOKEN_ERROR', err });
    });
  }
}

export const refreshToken = () => {

}

export const loginUser = (payload) => {
  return dispatch => {
    login(payload).then(res => {
      document.cookie = `token=${res.token}`;
      dispatch({ type: 'LOGIN', ...res });
    }).catch(err => {
      dispatch({ type: 'LOGIN_ERROR', err });
    });
  }
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
