import React from 'react';
import { Outlet } from 'react-router-dom';

const FlightsTable = () => {
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
        <Outlet />
      </tbody>
    </table>
  );
};

export default FlightsTable;
