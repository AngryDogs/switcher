import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Devices from './components/Devices';

import { withRouter, Redirect } from 'react-router-dom';
import { verifyToken } from '../api/token/actions';
import { connect } from 'react-redux';

const Dashboard = (props) => {
  const { verifing, verifyed } = props.token;
  if((verifing && !verifyed)) {
    return (
    <div> Loading </div>
  )} else return verifyed && !verifing ? (
    <div>
      <Sidebar />
      <Navbar />
      <Devices />
    </div>
  ) : (<Redirect to="/" />);
}

const mapDispatchToProps = (dispatch) => {
  return {
    verify: dispatch(verifyToken()),
  }
}

const mapStateToProps = (state) => {
  return { token: state.token };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Dashboard));
