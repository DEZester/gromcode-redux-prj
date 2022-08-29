import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import FlightsDates from './FlightsDates/FlightsDates';
import FlightsLink from './FlightsLinks/FlightsLink';
import FlightsTable from './FlightsTable/FlightsTable';
import NoFlights from './NoFlights/NoFights';

import { sortedFlightsDepartures, sortedFlightsArrivals } from './features/flights.selectors';
import * as flightsActions from './features/flights.actions';

const FlightsPage = ({
  departureFlightsList,
  arrivalsFlightsList,
  getFlightsList,
  inputValue,
  searchFlight,
}) => {
  const [linkStatus, changeStatus] = useState(true);
  const [needDate, changeDate] = useState(moment(new Date()).format('DD-MM-yy'));

  useEffect(() => {
    getFlightsList(needDate);
  }, [needDate]);

  const flightsList = linkStatus ? departureFlightsList : arrivalsFlightsList;

  const finalFlightsList = searchFlight(inputValue, flightsList);
  return (
    <div className="flights">
      <div className="links">
        <FlightsLink headerName="departures" changeStatus={changeStatus} />
        <FlightsLink headerName="arrivals" changeStatus={changeStatus} />
      </div>
      <FlightsDates changeDate={changeDate} />
      {finalFlightsList.length > 0 ? (
        <FlightsTable flightsList={finalFlightsList} />
      ) : (
        <NoFlights />
      )}
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
