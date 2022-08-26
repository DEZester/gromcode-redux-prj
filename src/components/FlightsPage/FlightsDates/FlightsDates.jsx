import React from 'react';
import moment from 'moment';

const FlightsDates = ({ changeDate }) => {
  const changeDateHandler = e => {
    changeDate(moment(e.target.value).format('DD-MM-yy'));
  };

  return (
    <div className="dates">
      <input type="date" className="dates__choise" onChange={changeDateHandler} />
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
