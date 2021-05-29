import React, { useState } from 'react';

const passenger = 'Passenger';
const driver = 'Driver';

export default function Tab() {
  const [activeTab, setActiveTab] = useState(passenger);
  const isPassenger = activeTab === passenger;
  const tabHeading = isPassenger
    ? "See who's driving and ask to join"
    : 'Set your route, time, and available seats';

  const handleChangeTab = tab => {
    setActiveTab(tab);
  };

  const InnerTab = () => {
    const imgClasses = isPassenger ? 'passenger-img' : 'driver-img';
    const tabClasses = isPassenger ? 'cars-tab' : 'pass-tab';
    console.log(imgClasses);

    return (
      <div className={`inner-tab row ${tabClasses}`}>
        <div className="col">
          <img className={imgClasses} alt="cars" />
        </div>
      </div>
    );
  };

  const getActiveClass = btn => {
    return (btn === 0 && isPassenger) || (btn === 1 && !isPassenger)
      ? 'btn-active'
      : '';
  };

  return (
    <div id="tab" className="row justify-content-center">
      <div id="card" className="col bg-white">
        <div className="inner-card row">
          <div className="col">
            <div className="buttons row">
              {[0, 1].map(item => (
                <div key={item} className="col">
                  <button
                    type="button"
                    className={`btn ${getActiveClass(item)}`}
                    onClick={() =>
                      handleChangeTab(isPassenger ? driver : passenger)
                    }
                  >
                    {item === 0 ? passenger : driver}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="inner-heading row">
          <div className="col">
            <h5>{tabHeading}</h5>
          </div>
        </div>
        <InnerTab tab={activeTab} />
      </div>
    </div>
  );
}
