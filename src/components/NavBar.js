import React, { useState } from 'react';

import logo from '../assets/images/Logo.svg';

export default function NavBar({ handleChange }) {
  const [activeElement, setActiveElement] = useState('#Now');

  const isActive = tab => {
    return tab === activeElement ? true : false;
  };

  return (
    <div className="fixed-top container-xxl">
      <div id="nav-bar" className="row bg-white">
        <div className="col-lg-12 col-xl-10 m-auto">
          <div className="row px-2 px-md-3">
            <div className="col col-auto col-lg nav-left-col">
              <a href="/">
                <img src={logo} alt="Logo" />
              </a>
            </div>
            <div className="col d-none col-lg-auto d-lg-inline-block">
              <a
                href="#heading"
                className={`nav-link ${isActive('#Now') && 'active'}`}
                onClick={() => setActiveElement('#Now')}
              >
                Now
              </a>
              <a
                href="#tab"
                className={`nav-link ${isActive('#ride') && 'active'}`}
                onClick={() => setActiveElement('#ride')}
              >
                How to ride
              </a>
              <a
                href="#tab"
                className={`nav-link ${isActive('#drive') && 'active'}`}
                onClick={() => setActiveElement('#drive')}
              >
                How to drive
              </a>
              <a
                href="#cards"
                className={`nav-link ${isActive('#features') && 'active'}`}
                onClick={() => setActiveElement('#features')}
              >
                Features
              </a>
            </div>
            <div className="col nav-right-col justify-content-end">
              <div className="row">
                <div className="col-auto d-none d-sm-flex">
                  <strong>Get the app</strong>
                </div>
                <div className="col">
                  <button className="nav-android-btn" />
                </div>
                <div className="col">
                  <button className="nav-ios-btn" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
