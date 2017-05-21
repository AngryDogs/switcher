import React from 'react';
import LoginForm from './LoginForm';

const LandingPageBody = () => (
  <div className="landingpage-body">
    <div className="container container-margin">
      <div className="row">
        <div className="col-sm-8 offset-sm-2">
          <LoginForm />
        </div>
      </div>
    </div>
  </div>
);

export default LandingPageBody;
