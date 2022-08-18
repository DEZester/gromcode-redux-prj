import React from 'react';

const SearchPage = () => {
  return (
    <div className="search-page">
      <h2 className="search-page__title">SEARCH FLIGHT</h2>
      <div className="search-page__field">
        <span className="search-page__loop"></span>
        <form className="search-page__form">
          <input type="text" placeholder="Airline, destination or flight #" />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
};

export default SearchPage;
