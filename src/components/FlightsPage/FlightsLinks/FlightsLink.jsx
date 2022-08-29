import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const FlightsLink = ({ headerName }) => {
  const { search } = useLocation();
  const params = search || '';
  const activeLink = ({ isActive }) =>
    isActive ? `links__item links__item-active` : `links__item`;

  return (
    <NavLink to={`/${headerName}${params}`} className={activeLink}>
      {headerName}
    </NavLink>
  );
};
export default FlightsLink;
