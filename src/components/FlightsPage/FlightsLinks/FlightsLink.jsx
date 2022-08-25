import React from 'react';
import { NavLink } from 'react-router-dom';

const FlightsLink = ({ headerName }) => {
  return (
    <NavLink
      to={headerName}
      className={({ isActive }) => (isActive ? `links__item links__item-active` : `links__item`)}
    >
      {headerName}
    </NavLink>
  );
};
export default FlightsLink;
