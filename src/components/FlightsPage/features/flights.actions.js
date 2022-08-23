export const ADD_TO_STATE = 'ADD_TO_STATE';

export const addToState = flightsData => {
  return {
    type: ADD_TO_STATE,
    payload: {
      flightsData,
    },
  };
};
