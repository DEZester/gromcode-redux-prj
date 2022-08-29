import React, { useState } from 'react';
import { Provider } from 'react-redux';
import FlightsPage from './components/FlightsPage/FlightsPage';
import SearchPage from './components/SearchPage/SearchPage';
import store from './store';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  const [inputValue, changeValue] = useState('');
  const [btnIsClicked, changeStatusBtn] = useState(false);

  const searchFlight = (searchValue, flightsList) => {
    if (btnIsClicked) {
      if (searchValue != '') {
        return flightsList.filter(elem => elem.flightId === searchValue);
      }
    }
    return flightsList;
  };

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="page">
          <SearchPage
            inputValue={inputValue}
            changeValue={changeValue}
            changeStatusBtn={changeStatusBtn}
          />
          <FlightsPage inputValue={inputValue} searchFlight={searchFlight} />
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
// создаем функцию для сортировки
// при нажати на кнопку рендерится новый список
