import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import FlightsDates from './FlightsDates/FlightsDates';
import FlightsLink from './FlightsLinks/FlightsLink';
import FlightsTable from './FlightsTable/FlightsTable';
import NoFlights from './NoFlights/NoFights';

import { sortedFlightsDepartures, sortedFlightsArrivals } from './features/flights.selectors';
import * as flightsActions from './features/flights.actions';

const FlightsPage = ({ departureFlightsList, arrivalsFlightsList, getFlightsList }) => {
  const [linkStatus, changeStatus] = useState(true);

  useEffect(() => {
    getFlightsList();
  }, []);

  const flightsList = linkStatus ? departureFlightsList : arrivalsFlightsList;
  //  flightsList.find(elem => elem.flightId === 'LO756') // найти элемент в списке
  return (
    <div className="flights">
      <div className="links">
        <FlightsLink headerName="departures" changeStatus={changeStatus} />
        <FlightsLink headerName="arrivals" changeStatus={changeStatus} />
      </div>
      <FlightsDates />
      {flightsList.length > 0 ? <FlightsTable flightsList={flightsList} /> : <NoFlights />}
    </div>
  );
};

const mapState = state => {
  return {
    departureFlightsList: sortedFlightsDepartures(state),
    arrivalsFlightsList: sortedFlightsArrivals(state),
  };
};

const mapDispatch = {
  getFlightsList: flightsActions.getFlightsData,
};

export default connect(mapState, mapDispatch)(FlightsPage);
