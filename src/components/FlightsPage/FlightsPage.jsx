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
  console.log(flightsList.length);
  return (
    <div className="flights">
      <FlightsLinks />
      <FlightsDates />
      {/* <NoFlights /> */}
      <FlightsTable flightsList={flightsList} />
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
