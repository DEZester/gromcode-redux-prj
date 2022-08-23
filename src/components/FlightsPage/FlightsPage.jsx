import React from 'react';
import FlightsLinks from './FlightsLinks/FlightsLinks';

const FlightsPage = () => {
  return (
    <div className="flights">
      <FlightsLinks />
      <div className="flights__dates dates">
        <input type="date" className="dates__choise" />
        <div className="dates__day">
          <span className="dates__day-number">21/08</span>
          <p>SUNDAY</p>
        </div>
        <div className="dates__day">
          <span className="dates__day-number">21/08</span>
          <p>SUNDAY</p>
        </div>
        <div className="dates__day dates__day__active">
          <span className="dates__day-number">21/08</span>
          <p>SUNDAY</p>
        </div>
      </div>
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
        </tbody>
      </table>
    </div>
  );
};

export default FlightsPage;
