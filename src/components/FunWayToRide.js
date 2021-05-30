import React from 'react';

import funText from '../assets/images/the.svg';

export default function FunWayToRide() {
  return (
    <div id="fun-way" className="row bg-white">
      <div className="col fun-way-col d-flex justify-content-center">
        <div className="phone-form"></div>
        <div className="phone-text">
          <img src={funText} alt="The new funway to reide" />
        </div>
      </div>
    </div>
  );
}
