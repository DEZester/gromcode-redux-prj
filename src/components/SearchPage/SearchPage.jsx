import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
const qs = require('qs');

const SearchPage = () => {
  const { search } = useLocation();
  const { value, date } = qs.parse(search.replace('?', ''));
  const [flightValue, changeValue] = useState(value || '');
  const navigate = useNavigate();

  const params = qs.stringify(flightValue ? { date, value: flightValue } : { date });
  const url = `/departures?${params}`;
  return (
    <div className="search-page">
      <div className="search-page-container">
        <h2 className="search-page__title">SEARCH FLIGHT</h2>
        <div className="search-field">
          <span className="search-field__loop"></span>
          <div className="search-field__container">
            <input
              className="search-field__input"
              type="text"
              placeholder="Airline, destination or flight #"
              value={flightValue}
              onChange={e => changeValue(e.target.value)}
            />
            <button
              className="search-field__btn"
              onClick={() => navigate(url, { state: flightValue })}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
