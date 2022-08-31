import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import moment from 'moment';

import FlightsDates from './FlightsDates/FlightsDates';
import FlightsLink from './FlightsLinks/FlightsLink';
import FlightsTable from './FlightsTable/FlightsTable';
import FlightsList from './FlightsList/FlightsList';

const FlightsPage = ({ date, setSearchParams, value }) => {
  return (
    <div className="flights-page">
      <div className="links">
        <FlightsLink headerName="departures" />
        <FlightsLink headerName="arrivals" />
      </div>
      <FlightsDates setSearchParams={setSearchParams} />
      <Routes>
        <Route path="/" element={<FlightsTable />}>
          <Route path=":listName" element={<FlightsList date={date} value={value} />} />
        </Route>
      </Routes>
    </div>
  );
};

export default FlightsPage;
