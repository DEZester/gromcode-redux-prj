import { FLIGHTS_DATA } from './flights.actions';

const initialState = {
  departures: [],
  arrivals: [],
};

const flightsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FLIGHTS_DATA:
      const { departure, arrival } = action.payload.flightData.body;
      return {
        ...state,
        departures: departure,
        arrivals: arrival,
      };

    default:
      return state;
  }
};

export default flightsReducer;
