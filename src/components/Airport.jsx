import React from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchPage from './SearchPage/SearchPage';
import FlightsPage from './FlightsPage/FlightsPage';

const Airport = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const date = searchParams.get('date') || '';
  const searchValue = searchParams.get('search') || '';

  return (
    <div className="page">
      <SearchPage date={date} setSearchParams={setSearchParams} />
      <FlightsPage date={date} searchValue={searchValue} setSearchParams={setSearchParams} />
    </div>
  );
};

export default Airport;
