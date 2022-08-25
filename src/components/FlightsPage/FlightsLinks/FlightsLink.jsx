import React from 'react';
import { NavLink } from 'react-router-dom';

const FlightsLink = ({ headerName, changeStatus }) => {
  const setStatus = () => {
    if (headerName === 'departures') {
      changeStatus(true);
    }
    if (headerName === 'arrivals') {
      changeStatus(false);
    }
  };
  return (
    <NavLink
      to={headerName}
      className={({ isActive }) => (isActive ? `links__item links__item-active` : `links__item`)}
      onClick={setStatus}
    >
      {headerName}
    </NavLink>
  );
};
export default FlightsLink;
