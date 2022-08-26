import React from 'react';
import FlightsTableItem from './FlightsTableItem';

const FlightsTable = ({ flightsList }) => {
  return (
    <table className="table">
      <thead>
        <tr className="info">
          <th className="info__item">Terminal</th>
          <th className="info__item">Local Time</th>
          <th className="info__item">Destination</th>
          <th className="info__item">Status</th>
          <th className="info__item">Airline</th>
          <th className="info__item">Flight</th>
        </tr>
      </thead>
      <tbody className="table__list">
        {flightsList.map(flight => {
          console.log(flight);
          return (
            <FlightsTableItem
              key={flight.id}
              term={flight.term}
              time={flight.time}
              destination={flight.destination}
              status={flight.status}
              airlineImg={flight.airlineImg}
              airlineName={flight.company}
              flightCode={flight.flightId}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default FlightsTable;
