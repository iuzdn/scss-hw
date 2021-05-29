import React from 'react';
import phoneMock from '../assets/images/mocku.png';

export default function PhoneMock() {
  return (
    <div id="phone-mock" className="row bg-white position-relative">
      <div className="col col-8 col-md-6 col-xl-4 col-xxl-3 m-auto pt-5">
        <img className="main-img" src={phoneMock} alt="Phone mock" />
      </div>
      <div className="mock-gradient position-absolute"></div>
    </div>
  );
}
