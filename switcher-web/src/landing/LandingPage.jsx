import React from 'react';
import { loginUser } from '../api/token/actions';
import { connect } from 'react-redux';
import LandingPageBody from './components/LandingPageBody';

const LandingPage = (props) => {
  props.dispatch(loginUser({username: 'rain', password: 'asdasdasd'}));
  return (
    <div>
      <LandingPageBody />
    </div>
  );
}

export default connect()(LandingPage);
