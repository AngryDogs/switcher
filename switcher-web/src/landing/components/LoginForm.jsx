import React from 'react';

const LoginForm = () => (
  <div className="login-form">
    <div className="container">
      <form>
        <div className="login-form-header">
          <h4>LOGIN</h4>
          <p>Login to access your smart home</p>
          <div className="input-group custom-input-first custom-input-margin">
            <input type="text" className="form-control" placeholder="Username" aria-describedby="basic-addon1" />
          </div>
          <div className="input-group custom-input-second">
            <input type="password" className="form-control" placeholder="Password" aria-describedby="basic-addon1" />
          </div>
          <input className="btn btn-primary custom-button" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  </div>
);

export default LoginForm;
