import React from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

import FlightsDates from './FlightsDates/FlightsDates';
import FlightsLink from './FlightsLinks/FlightsLink';
import FlightsTable from './FlightsTable/FlightsTable';
import FlightsList from './FlightsList/FlightsList';

const FlightsPage = ({ date, setSearchParams, searchValue }) => {
  const { search, pathname } = useLocation();
  const params = search || '';
  const navigate = useNavigate();

  if (pathname !== '/arrivals') {
    window.addEventListener('load', () => {
      navigate(`departures${params}`);
    });
  }

  return (
    <div className="flights-page">
      <div className="links">
        <FlightsLink headerName="departures" />
        <FlightsLink headerName="arrivals" />
      </div>
      <FlightsDates setSearchParams={setSearchParams} date={date} />
      <Routes>
        <Route path="/" element={<FlightsTable />}>
          <Route path=":listName" element={<FlightsList date={date} searchValue={searchValue} />} />
        </Route>
      </Routes>
    </div>
  );
};

export default FlightsPage;
