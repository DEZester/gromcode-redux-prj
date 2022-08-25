import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { departuresSelector, arrivalsSelector } from './features/flights.selectors';
import * as flightsActions from './features/flights.actions';
import FlightsDates from './FlightsDates/FlightsDates';
import FlightsLink from './FlightsLinks/FlightsLink';
import FlightsTable from './FlightsTable/FlightsTable';
import NoFlights from './NoFlights/NoFights';

const FlightsPage = ({ departureFlightsList, arrivalsFlightsList, getFlightsList }) => {
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
      {departureFlightsList.length > 0 ? (
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
