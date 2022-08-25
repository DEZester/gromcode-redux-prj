import React from 'react';
import { NavLink } from 'react-router-dom';

const FlightsLink = ({ headerName, changeStatus }) => {
  const setActive = ({ isActive }) => (isActive ? `links__item links__item-active` : `links__item`);

  const setStatus = () => {
    if (headerName === 'departures') {
      changeStatus(true);
    }
    if (headerName === 'arrivals') {
      changeStatus(false);
    }
  };
  return (
    <NavLink to={headerName} className={setActive} onClick={setStatus}>
      {headerName}
    </NavLink>
  );
};
export default FlightsLink;
