import React from 'react';
import FlightsDates from './FlightsDates/FlightsDates';
import FlightsLinks from './FlightsLinks/FlightsLinks';
import FlightsTable from './FlightsTable/FlightsTable';

const FlightsPage = () => {
  return (
    <div className="flights">
      <FlightsLinks />
      <FlightsDates />
      <FlightsTable />
    </div>
  );
};

export default FlightsPage;
