import React from 'react';

const FlightsChoosenDay = ({ choosenDay, currentDay, date, changeDateHandler }) => {
  const className =
    currentDay === date.format('DD-MM-YYYY') ? 'dates__day dates__day__active' : 'dates__day';

  return (
    <div className={className} onClick={() => changeDateHandler(date)}>
      <span className="dates__day-number">{date.format('DD/MM')}</span>
      <p>{choosenDay.toUpperCase()}</p>
    </div>
  );
};

export default FlightsChoosenDay;
