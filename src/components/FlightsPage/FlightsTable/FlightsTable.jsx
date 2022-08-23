import React from 'react';
import FlightsTableItem from './FlightsTableItem';
import { connect } from 'react-redux';
import { flightsListSelector } from '../features/flights.selectors';

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
          <FlightsTableItem key={flight.id} {...flight} />
        ))}
      </tbody>
    </table>
  );
};

const mapState = state => {
  return {
    flightsList: flightsListSelector(state),
  };
};

export default connect(mapState)(FlightsTable);
