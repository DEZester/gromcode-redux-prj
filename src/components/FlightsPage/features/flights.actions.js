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

export const getFlightsData = () => {
  return function (dispatch) {
    fetchFlights().then(flight => {
      dispatch(flightsData(flight));
    });
  };
};
