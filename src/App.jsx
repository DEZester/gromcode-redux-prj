import React from 'react';
import SearchPage from './components/SearchPage/SearchPage';

const App = () => {
  return (
    <div className="page">
      <SearchPage />
      <div className="flights">
        <div className="flights-container">
          <a href="#" className="flights__link">
            departures
          </a>
          <a href="#" className="flights__link flights__link__active">
            arrivals
          </a>
        </div>
      </div>
      <div className="flights_dates">
        <input type="date" className="dates__choise" />
        <div className="dates__day">
          <span className="dates__day-number">21/08</span>
          <p>SUNDAY</p>
        </div>
        <div className="dates__day">
          <span className="dates__day-number">21/08</span>
          <p>SUNDAY</p>
        </div>
        <div className="dates__day">
          <span className="dates__day-number">21/08</span>
          <p>SUNDAY</p>
        </div>
      </div>
    </div>
  );
};

export default App;
