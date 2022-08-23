import React from 'react';
import FlightsTableItem from './FlightsTableItem';

const FlightsTable = () => {
  return (
    <table className="flights__table table">
      <thead>
        <tr className="table__info info">
          <th className="info__item">Terminal</th>
          <th className="info__item">Local Time</th>
          <th className="info__item">Destination</th>
          <th className="info__item">Status</th>
          <th className="info__item">Airline</th>
          <th className="info__item">Flight</th>
        </tr>
      </thead>
      <tbody className="table__list">
        <FlightsTableItem />
        <FlightsTableItem />
        <FlightsTableItem />
        <FlightsTableItem />
      </tbody>
    </table>
  );
};

export default FlightsTable;
