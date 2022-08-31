import React, { useState } from 'react';
import moment from 'moment';
import FlightsChoosenDay from './FlightsChoosenDay';
import { useNavigate } from 'react-router-dom';

const qs = require('qs');

const FlightsDates = ({ setSearchParams, date }) => {
  const [currentDay, setCurrentDay] = useState();
  const navigate = useNavigate();

  const changeDateHandler = dateFromInput => {
    const formatedDate = moment(dateFromInput).format('DD-MM-YYYY');
    setCurrentDay(formatedDate);
    setSearchParams({ date: formatedDate });
    const params = qs.stringify({ date: formatedDate });
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
