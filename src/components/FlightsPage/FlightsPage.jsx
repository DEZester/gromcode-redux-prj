import React, { useState } from 'react';
import FlightsDates from './FlightsDates/FlightsDates';
import FlightsLinks from './FlightsLinks/FlightsLinks';
import FlightsTable from './FlightsTable/FlightsTable';

const FlightsPage = () => {
  // const [flightsList, setFlightsList] = useState([{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }]);

  return (
    <div className="flights">
      <FlightsLinks />
      <FlightsDates />
      <FlightsTable />
    </div>
  );
};

export default FlightsPage;
