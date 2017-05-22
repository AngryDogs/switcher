import React from 'react';

let switchState = false;

const changeState = (event, Device) => {
  console.log(switchState);
  switchState = !switchState;
  Device.updater.enqueueForceUpdate(Device);
}

const Device = () => {

  const onOff = switchState ? 'on-off-button-on' : '';
  const finalClass = "on-off-button-outer" + onOff;

  return (
    <div className="device">
      <p>TP-LINK HS100</p>
      <div onClick={event => changeState(event, this)}
        className={finalClass}>
        <i className="fa fa-power-off on-off-button" aria-hidden="true"></i>
      </div>
    </div>
  );
}

export default Device;
