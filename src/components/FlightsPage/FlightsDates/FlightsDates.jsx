import React from 'react';

const FlightsDates = () => {
  return (
    <div className="flights__dates dates">
      <input type="date" className="dates__choise" />
      <div className="dates__day">
        <span className="dates__day-number">21/08</span>
        <p>SUNDAY</p>
      </div>
      <div className="dates__day">
        <span className="dates__day-number">21/08</span>
        <p>SUNDAY</p>
      </div>
      <div className="dates__day dates__day__active">
        <span className="dates__day-number">21/08</span>
        <p>SUNDAY</p>
      </div>
    </div>
  );
};
export default FlightsDates;
