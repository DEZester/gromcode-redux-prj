import React from 'react';
import FlightsListItem from './FlightsListItem';
import NoFlights from '../NoFlights/NoFights';

const FlightsList = ({ flightsList }) => {
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

export default FlightsList;
