import React, { useState } from 'react';
import moment from 'moment';
import { useLocation, useNavigate } from 'react-router-dom';
import FlightsChoosenDay from './FlightsChoosenDay';
const qs = require('qs');

const FlightsDates = () => {
  const [currentDay, setCurrentDay] = useState();
  const navigate = useNavigate();
  const { search } = useLocation();

  const { value } = qs.parse(search.replace('?', ''));

  const changeDateHandler = date => {
    const formatedDate = moment(date).format('DD-MM-YYYY');
    setCurrentDay(formatedDate);
    const params = qs.stringify({ date: formatedDate, value });
    navigate(`/departures?${params}`);
  };

  const yesterday = moment().subtract(1, 'd');
  const today = moment();
  const tomorrow = moment().add(1, 'd');

  return (
    <div className="dates">
      <input
        type="date"
        className="dates__choise"
        onInput={event => changeDateHandler(event.target.value)}
      />
      <FlightsChoosenDay
        key={yesterday.format('DDDD')}
        choosenDay="yesterday"
        date={yesterday}
        changeDateHandler={changeDateHandler}
        currentDay={currentDay}
      />
      <FlightsChoosenDay
        key={today.format('DDDD')}
        choosenDay="today"
        date={today}
        changeDateHandler={changeDateHandler}
        currentDay={currentDay}
      />
      <FlightsChoosenDay
        key={tomorrow.format('DDDD')}
        choosenDay="tomorrow"
        date={tomorrow}
        changeDateHandler={changeDateHandler}
        currentDay={currentDay}
      />
    </div>
  );
};
export default FlightsDates;
