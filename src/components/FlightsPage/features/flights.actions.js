import fetchFlights from '../../../gateway/gateway';
export const FLIGHTS_DATA = 'FLIGHTS_DATA';

export const flightsData = flightData => {
  return {
    type: FLIGHTS_DATA,
    payload: {
      flightData,
    },
  };
};

export const getFlightsData = date => {
  return function (dispatch) {
    fetchFlights(date).then(flight => {
      dispatch(flightsData(flight));
    });
  };
};
