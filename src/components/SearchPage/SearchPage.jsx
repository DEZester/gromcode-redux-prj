import React from 'react';

const SearchPage = ({ inputValue, changeValue, changeStatusBtn }) => {
  const changeHandler = e => {
    changeValue(e.target.value);
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
              value={inputValue}
              onChange={changeHandler}
            />
            <button className="search-field__btn" onClick={() => changeStatusBtn(true)}>
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
