import React from 'react'

import { withRouter, Redirect } from 'react-router-dom';
import { loginUser } from '../../api/token/actions';
import { connect } from 'react-redux';

const submitLogin = (event, props) => {
  event.preventDefault();
  props.dispatch(loginUser({
    username: event.target.username.value,
    password: event.target.password.value,
  }));
  event.target.username.value = "";
  event.target.password.value = "";
}

const LoginForm = (props) => {
  if(props.token.verifyed) return (<Redirect to="/dashboard" />);
  return (
    <div className="login-form">
      <div className="container">
        <form onSubmit={ event => submitLogin(event, props)}>
          <div className="login-form-header">
            <h4>Sign in to your smart home</h4>
            <hr />
            <div className="input-group custom-input-first custom-input-margin">
              <input name="username" type="text" className="form-control" placeholder="Username" aria-describedby="basic-addon1" required/>
            </div>
            <div className="input-group custom-input-second">
              <input name="password" type="password" className="form-control" placeholder="Password" aria-describedby="basic-addon1" required/>
            </div>
            <input className="btn btn-primary custom-button" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default connect(state => state)(withRouter(LoginForm));
