import React, { useState } from 'react';

const SearchPage = ({ date, setSearchParams }) => {
  const [flightValue, changeValue] = useState('');

  const searchHandler = () => {
    return flightValue ? setSearchParams({ date, search: flightValue }) : setSearchParams({ date });
  };

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
            <button className="search-field__btn" onClick={searchHandler}>
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
