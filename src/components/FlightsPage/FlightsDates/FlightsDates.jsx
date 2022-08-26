import React from 'react';
import moment from 'moment';

const FlightsDates = ({ changeDate }) => {
  const changeDateHandler = e => {
    changeDate(moment(e.target.value).format('DD-MM-yy'));
  };
  const currentDate = new Date();

  const tomorrow = date => {
    let tomorrow = new Date();
    return moment(tomorrow.setDate(date.getDate() + 1)).format('DD/MM');
  };

  const yesterday = date => {
    let yesterday = new Date();
    return moment(yesterday.setDate(date.getDate() - 1)).format('DD/MM');
  };

  return (
    <div className="dates">
      <input type="date" className="dates__choise" onChange={changeDateHandler} />
      <div className="dates__day">
        <span className="dates__day-number">{yesterday(currentDate)}</span>
        <p>YESTERDAY</p>
      </div>
      <div className="dates__day">
        <span className="dates__day-number">{moment(currentDate).format('DD/MM')}</span>
        <p>TODAY</p>
      </div>
      <div className="dates__day dates__day__active">
        <span className="dates__day-number">{tomorrow(currentDate)}</span>
        <p>TOMORROW</p>
      </div>
    </div>
  );
};
export default FlightsDates;
