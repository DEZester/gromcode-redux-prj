import React, { useState } from 'react';
import { Provider } from 'react-redux';
import FlightsPage from './components/FlightsPage/FlightsPage';
import SearchPage from './components/SearchPage/SearchPage';
import store from './store';
import { BrowserRouter } from 'react-router-dom';
import Airport from './components/Airport';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Airport />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
