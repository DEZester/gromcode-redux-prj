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
        {flightsList.map(flight => (
          <FlightsTableItem
            time={flight.actual}
            key={flight.ID}
            term={flight.term}
            airlineImg={flight.airline.en.logoName}
            name={[flight['airportToID.name_en']]}
            airlineName={flight.airline.en.name}
            flightCode={flight.codeShareData[0].codeShare}
            status={flight.status}
          />
        ))}
      </tbody>
    </table>
  );
};

export default FlightsTable;
