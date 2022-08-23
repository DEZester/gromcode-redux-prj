import React from 'react';

const FlightsTableItem = () => {
  return (
    <tr className="table__raw">
      <th className="table__item">
        <span className="table__item-terminal table__item-terminal__d">D</span>
      </th>
      <th className="table__item">9:05</th>
      <th className="table__item">London</th>
      <th className="table__item">DP</th>
      <th className="table__item-airline">
        <ul className="table__item-airline-list">
          <li>
            <img
              className="table__item-logo"
              src="https://api.iev.aero/media/airline/files/606aefa0c8a4a734421442.png"
              alt="logo"
            />
          </li>
          <li>
            <span>Bees Airline</span>
          </li>
        </ul>
      </th>
      <th className="table__item">7B2001</th>
    </tr>
  );
};

export default FlightsTableItem;
