import React from 'react';

import fun from '../assets/images/fun.svg';

export default function Heading() {
  return (
    <div id="heading" className="row pt-7 bg-white">
      <div className="col col-lg-9 m-auto p-3">
        <h3 className="text-center">
          carpooling made <strong>easy, safe</strong> and{' '}
          <img className="fun-image" src={fun} alt="fun" /> for{' '}
          <strong>
            <span style={{ fontStyle: 'italic' }}>everyone</span>
          </strong>
        </h3>
      </div>
    </div>
  );
}
