import React, { useEffect } from 'react';
import FlightsTableItem from './FlightsTableItem';
import { connect } from 'react-redux';
import { departuresSelector } from '../features/flights.selectors';
import * as flightsActions from '../features/flights.actions';

const FlightsTable = ({ flightsList, getFlightsList }) => {
  useEffect(() => {
    getFlightsList();
  }, []);

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

const mapState = state => {
  return {
    flightsList: departuresSelector(state),
  };
};

const mapDispatch = {
  getFlightsList: flightsActions.getFlightsData,
};

export default connect(mapState, mapDispatch)(FlightsTable);
