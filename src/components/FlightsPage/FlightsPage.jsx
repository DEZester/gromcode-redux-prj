import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import FlightsDates from './FlightsDates/FlightsDates';
import FlightsLink from './FlightsLinks/FlightsLink';
import FlightsTable from './FlightsTable/FlightsTable';

import { departuresSelector, arrivalsSelector } from './features/flights.selectors';
import * as flightsActions from './features/flights.actions';

const FlightsPage = ({ departureFlightsList, arrivalsFlightsList, getFlightsList }) => {
  const [isActive, setStatusActive] = useState(true);

  useEffect(() => {
    getFlightsList();
  }, []);

  return (
    <div className="flights">
      <div className="links">
        <FlightsLink headerName="departures" />
        <FlightsLink headerName="arrivals" />
      </div>
      <FlightsDates />
      {isActive ? (
        <FlightsTable flightsList={departureFlightsList} />
      ) : (
        <FlightsTable flightsList={arrivalsFlightsList} />
      )}
    </div>
  );
};

const mapState = state => {
  return {
    departureFlightsList: departuresSelector(state),
    arrivalsFlightsList: arrivalsSelector(state),
  };
};

const mapDispatch = {
  getFlightsList: flightsActions.getFlightsData,
};

export default connect(mapState, mapDispatch)(FlightsPage);
