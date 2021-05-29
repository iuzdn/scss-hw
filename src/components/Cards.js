import React from 'react';

import map from '../assets/images/Icon-map.svg';
import lights from '../assets/images/Icon-map.svg';
import bus from '../assets/images/Transport.svg';

export default function Cards() {
  return (
    <div id="cards" className="row pt-4">
      <div className="col-12 py-3 first-row mb-2">
        <div className="figure">
          <div className="inter-div">
            <img className="card-icon" src={map} alt="map-icon" />
            <h6>Map style switcher</h6>
            <div className="circle"></div>
          </div>
          <div className="figure-inside"></div>
          <div className="figure-inside tilt-1"></div>
        </div>
      </div>
      <div className="col-12 d-flex flex-wrap justify-content-end">
        <div className="rectangle m-3 r-blue">
          <img className="card-icon" src={lights} alt="lights" />
          <h6>Real-time trafinc</h6>
        </div>
        <div className="rectangle m-3 r-orange">
          <img className="card-icon" src={bus} alt="bus" />
          <h6>Schedule of public transport that is near you</h6>
        </div>
      </div>
    </div>
  );
}
