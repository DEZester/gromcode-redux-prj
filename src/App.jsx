import React from 'react';
import FlightsPage from './components/FlightsPage/FlightsPage';
import SearchPage from './components/SearchPage/SearchPage';

const App = () => {
  return (
    <div className="page">
      <SearchPage />
      <FlightsPage />
    </div>
  );
};

export default App;
