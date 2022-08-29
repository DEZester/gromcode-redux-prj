import React, { useState } from 'react';
import { Provider } from 'react-redux';
import FlightsPage from './components/FlightsPage/FlightsPage';
import SearchPage from './components/SearchPage/SearchPage';
import store from './store';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="page">
          <SearchPage />
          <FlightsPage />
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
// создаем функцию для сортировки
// при нажати на кнопку рендерится новый список
