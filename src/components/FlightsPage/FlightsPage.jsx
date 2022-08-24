import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { departuresSelector } from './features/flights.selectors';
import * as flightsActions from './features/flights.actions';
import FlightsDates from './FlightsDates/FlightsDates';
import FlightsLinks from './FlightsLinks/FlightsLinks';
import FlightsTable from './FlightsTable/FlightsTable';
import NoFlights from './NoFlights/NoFights';

const FlightsPage = ({ flightsList, getFlightsList }) => {
  useEffect(() => {
    getFlightsList();
  }, []);

  return (
    <div className="flights">
      <FlightsLinks />
      <FlightsDates />
      {flightsList.length > 0 ? <FlightsTable flightsList={flightsList} /> : <NoFlights />}
    </div>
  );
};

const mapState = state => {
  return {
    flightsList: departuresSelector(state),
  };
};

const mapDispatch = {
  getFlightsList: flightsActions.getFlightsData,
};

export default connect(mapState, mapDispatch)(FlightsPage);
