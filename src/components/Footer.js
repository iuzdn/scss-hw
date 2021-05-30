import React from 'react';
import Tilt from 'react-tilt';

import blackPhone from '../assets/images/iPhone X.png';
import carpoolGraph from '../assets/images/Group 233.svg';

export default function Footer() {
  return (
    <div id="footer" className="row">
      <div className="col-12 iPhone-x">
        <img
          className="black-phone-img"
          src={blackPhone}
          alt="Carpool made easy"
        />
        <Tilt className="carpool-graph" options={{ max: 25 }}>
          <img
            className="Tilt-inner"
            src={carpoolGraph}
            alt="Carpool animated graph"
          />
        </Tilt>
        <div className="iphone-gradient"></div>
      </div>
      <div className="col-12 position-relative">
        <div className="iphone-text">
          <h3>Join the band</h3>
          <p>a fresh way to share the road and make new connections</p>
        </div>
        <div className="row iphone-buttons">
          <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end p-2">
            <button className="download-btn ios-btn">Download for iOS</button>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-start p-2">
            <button className="download-btn android-btn">
              Download for Android
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
