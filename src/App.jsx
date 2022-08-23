import React from 'react';
import FlightsPage from './components/FlightsPage/FlightsPage';
import SearchPage from './components/SearchPage/SearchPage';
import fetchFlights from './gateway/gateway';

const App = () => {
  fetchFlights();
  return (
    <div className="page">
      <SearchPage />
      <FlightsPage />
    </div>
  );
};

export default App;
