const url = "http://localhost:8000/api/auth/"
const headers = new Headers();

const init = { method: 'POST',
               headers: headers,
               mode: 'cors',
               cache: 'default' };

export function verify(token) {
  const data = new FormData();
  data.append("token", token);
  return fetch(url + "token/verify", { ...init, body: data }).then(res => {
    return res.json();
  }).catch(err => {
    return err;
  });
}

export function login(payload) {
  const data = new FormData();
  data.append("username", payload.username);
  data.append("password", payload.password);

  return fetch(url + "login", { ...init, body: data }).then(res => {
    return res.json();
  }).catch(err => {
    return err;
  });
}

export function refresh(payload) {

}
