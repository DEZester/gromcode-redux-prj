import React from 'react';
import { Provider } from 'react-redux';
import FlightsPage from './components/FlightsPage/FlightsPage';
import SearchPage from './components/SearchPage/SearchPage';
import fetchFlights from './gateway/gateway';
import store from './store';

const App = () => {
  fetchFlights();
  return (
    <Provider store={store}>
      <div className="page">
        <SearchPage />
        <FlightsPage />
      </div>
    </Provider>
  );
};

export default App;
