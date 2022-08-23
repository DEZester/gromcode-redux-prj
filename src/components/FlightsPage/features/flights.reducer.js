import { ADD_TO_STATE } from './flights.actions';

const initialState = {
  flightsList: [
    { id: 0, name: 'London' },
    { id: 1, name: 'Kyiv' },
    { id: 2, name: 'New-York' },
    { id: 3, name: 'Dnepr' },
    { id: 4, name: 'Dnepr' },
  ],
};

const flightsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_STATE:
      return {
        ...state,
        state: action.payload.flightsData,
      };

    default:
      return state;
  }
};

export default flightsReducer;
