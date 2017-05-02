import React from 'react';

import { withRouter, Redirect } from 'react-router-dom';
import { verifyToken } from '../api/token/actions';
import { connect } from 'react-redux';

const Dashboard = (props) => {
  console.log(props.token);
  const { verifing, verifyed } = props.token;
  if((verifing && !verifyed) || (!verifing && !verifyed)) {
    return (
    <div> Loading </div>
  )} else return verifyed && !verifing ? (
    <div>
      I am dashboard
    </div>
  ) : (<Redirect to="/login" />);
}

const mapDispatchToProps = (dispatch) => {
  return { verify: dispatch(verifyToken())}
}

const mapStateToProps = (state) => {
  return { token: state.token };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Dashboard));
