import React, { useState } from 'react';
import moment from 'moment';
import FlightsChoosenDay from './FlightsChoosenDay';

const FlightsDates = ({ setSearchParams }) => {
  const [currentDay, setCurrentDay] = useState();

  const changeDateHandler = date => {
    const formatedDate = moment(date).format('DD-MM-YYYY');
    setCurrentDay(formatedDate);
    setSearchParams({ date: formatedDate });
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
