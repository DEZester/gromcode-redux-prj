import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import FlightsListItem from './FlightsListItem';
import NoFlights from '../NoFlights/NoFights';

import { sortedFlightsDepartures, sortedFlightsArrivals } from '../features/flights.selectors';
import * as flightsActions from '../features/flights.actions';

const FlightsList = ({ getFlightsList, departureFlightsList, arrivalsFlightsList, needDate }) => {
  const { listName } = useParams();

  useEffect(() => {
    getFlightsList(needDate);
  }, [needDate]);

  const flightsList = listName === 'departures' ? departureFlightsList : arrivalsFlightsList;
  return (
    <>
      {flightsList.length > 0 ? (
        flightsList.map(flight => (
          <FlightsListItem
            key={flight.id}
            term={flight.term}
            time={flight.time}
            destination={flight.destination}
            status={flight.status}
            airlineImg={flight.airlineImg}
            airlineName={flight.company}
            flightCode={flight.flightId}
          />
        ))
      ) : (
        <NoFlights />
      )}
    </>
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

export default connect(mapState, mapDispatch)(FlightsList);
