import React from 'react';

import { withRouter } from 'react-router-dom';
import { deviceState } from '../../api/device/actions';
import { connect } from 'react-redux';

const changeState = (event, props) => {
  props.changeState();
}

const Device = (props) => {

  const { deviceState } = props;
  const onOff = deviceState ? ' on-off-button-on' : '';
  const finalClass = "on-off-button-outer" + onOff;

  return (
    <div className="device">
      <p>TP-LINK HS100</p>
      <div onClick={event => changeState(event, props)}
        className={ finalClass }>
        <i className="fa fa-power-off on-off-button" aria-hidden="true"></i>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeState: () => dispatch(deviceState()),
  }
}

const mapStateToProps = (state) => {
  return { deviceState: state.device.deviceState };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Device));
