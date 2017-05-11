import React from 'react';
import LoginForm from './LoginForm';
import Introduction from './Introduction';

const LandingPageBody = () => (
  <div className="landingpage-body">
    <div className="container container-margin">
      <div className="row">
        <div className="col-sm-8">
          <Introduction />
        </div>
        <div className="col-sm-4">
          <LoginForm />
        </div>
      </div>
    </div>
  </div>
);

export default LandingPageBody;
