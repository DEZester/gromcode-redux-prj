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
          const destination = !!flight['airportToID.name_en']
            ? flight['airportToID.name_en']
            : flight['airportFromID.city_en'];
          return (
            <FlightsTableItem
              time={flight.actual}
              key={flight.ID}
              term={flight.term}
              airlineImg={flight.airline.en.logoName}
              destination={destination}
              airlineName={flight.airline.en.name}
              flightCode={flight.codeShareData[0].codeShare}
              status={flight.status}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default FlightsTable;
