import React from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchPage from './SearchPage/SearchPage';
import FlightsPage from './FlightsPage/FlightsPage';

const Airport = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const date = searchParams.get('date') || '';
  const value = searchParams.get('value') || '';

  return (
    <div className="page">
      <SearchPage date={date} setSearchParams={setSearchParams} />
      <FlightsPage date={date} value={value} setSearchParams={setSearchParams} />
    </div>
  );
};

export default Airport;
