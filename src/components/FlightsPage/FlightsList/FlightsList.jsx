import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import FlightsListItem from './FlightsListItem';
import NoFlights from '../NoFlights/NoFights';

import { sortedFlightsDepartures, sortedFlightsArrivals } from '../features/flights.selectors';
import * as flightsActions from '../features/flights.actions';

const FlightsList = ({
  getFlightsList,
  departureFlightsList,
  arrivalsFlightsList,
  date,
  searchValue,
}) => {
  const { listName } = useParams();
  useEffect(() => {
    getFlightsList(date);
  }, [date]);

  const flightsList = listName === 'departures' ? departureFlightsList : arrivalsFlightsList;

  const searchFlights = (flightsList, searchValue) => {
    if (searchValue !== '') {
      return flightsList.filter(flight => {
        if (Object.values(flight).includes(searchValue)) {
          return flight;
        }
      });
    }
    return flightsList;
  };

  const flightsListWithSearch = searchFlights(flightsList, searchValue);

  return (
    <>
      {flightsListWithSearch.length > 0 ? (
        flightsListWithSearch.map(flight => (
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
