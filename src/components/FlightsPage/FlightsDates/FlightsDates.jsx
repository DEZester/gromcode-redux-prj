import React from 'react';
import moment from 'moment';
import { useLocation, useNavigate } from 'react-router-dom';
const qs = require('qs');

const FlightsDates = () => {
  const { search } = useLocation();
  const { value } = qs.parse(search.replace('?', ''));
  const navigate = useNavigate();

  const changeDateHandler = date => {
    const formatedDate = moment(date).format('DD-MM-YYYY');
    const params = qs.stringify({ date: formatedDate, value });
    navigate(`/departures?${params}`);
  };

  const yesterday = moment().subtract(1, 'd').format('DD/MM');
  const today = moment().format('DD/MM');
  const tomorrow = moment().add(1, 'd').format('DD/MM');

  return (
    <div className="dates">
      <input
        type="date"
        className="dates__choise"
        onInput={event => changeDateHandler(event.target.value)}
      />
      <div className="dates__day">
        <span className="dates__day-number">{yesterday}</span>
        <p>YESTERDAY</p>
      </div>
      <div className="dates__day">
        <span className="dates__day-number">{today}</span>
        <p>TODAY</p>
      </div>
      <div className="dates__day dates__day__active">
        <span className="dates__day-number">{tomorrow}</span>
        <p>TOMORROW</p>
      </div>
    </div>
  );
};
export default FlightsDates;
