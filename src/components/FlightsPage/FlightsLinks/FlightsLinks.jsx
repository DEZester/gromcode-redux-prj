import React from 'react';
import FlightsLink from './FlightsLink';

const FlightsLinks = () => {
  return (
    <div className="flights__links">
      <FlightsLink name="departures" />
      <FlightsLink name="arrivals" />
    </div>
  );
};
export default FlightsLinks;
