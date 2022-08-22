import React from 'react';
import SearchPage from './components/SearchPage/SearchPage';

const App = () => {
  return (
    <div className="page">
      <SearchPage />
      <div className="flights">
        <div className="flights__links">
          <a href="#" className="flights__links-item">
            departures
          </a>
          <a href="#" className="flights__links-item flights__link-active">
            arrivals
          </a>
        </div>
        <div className="flights__dates dates">
          <input type="date" className="dates__choise" />
          <div className="dates__day">
            <span className="dates__day-number">21/08</span>
            <p>SUNDAY</p>
          </div>
          <div className="dates__day">
            <span className="dates__day-number">21/08</span>
            <p>SUNDAY</p>
          </div>
          <div className="dates__day dates__day__active">
            <span className="dates__day-number">21/08</span>
            <p>SUNDAY</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
