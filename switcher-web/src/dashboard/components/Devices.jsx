import React from 'react';
import Device from './Device';

const Devices = () => {
  return (
    <div className="devices">
      <div className="container">
        <div className="row">
          <div className="col-sm-11 offset-sm-2">
            <h4>My devices</h4>
            <div className="devices-list">
              <p className="text-sm">MY SWITCHES</p>
              <hr />
              <Device />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Devices;
