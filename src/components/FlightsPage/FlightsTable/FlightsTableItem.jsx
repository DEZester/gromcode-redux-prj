import React from 'react';
import moment from 'moment';

const FlightsTableItem = ({ term, airlineImg, name, airlineName, flightCode, status, time }) => {
  const termCheck = `table__item-terminal ${
    term === 'D' ? `table__item-terminal__d` : `table__item-terminal__a`
  }`;

  return (
    <tr className="table__raw">
      <th className="table__item">
        <span className={termCheck}>{term}</span>
      </th>
      <th className="table__item">{moment(time).format('hh:mm')}</th>
      <th className="table__item">{name}</th>
      <th className="table__item">{status}</th>
      <th className="table__item-airline">
        <ul className="table__item-airline-list">
          <li>
            <img className="table__item-logo" src={airlineImg} alt="logo" />
          </li>
          <li>
            <span>{airlineName}</span>
          </li>
        </ul>
      </th>
      <th className="table__item">{flightCode}</th>
    </tr>
  );
};

export default FlightsTableItem;
