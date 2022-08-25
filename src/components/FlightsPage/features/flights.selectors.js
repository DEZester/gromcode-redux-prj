import { createSelector } from 'reselect';

export const departuresSelector = state => state.flights.departures;
export const arrivalsSelector = state => state.flights.arrivals;

export const sortedFlightsArrivals = createSelector([arrivalsSelector], flightList =>
  flightList.map(flight => ({
    id: flight.ID,
    term: flight.term,
    time: flight.actual,
    destination: flight['airportFromID.city_en'],
    status: flight.status,
    company: flight['carrierID.code'],
    flightId: flight.codeShareData[0].codeShare,
  })),
);

export const sortedFlightsDepartures = createSelector([departuresSelector], flightList =>
  flightList.map(flight => ({
    id: flight.ID,
    term: flight.term,
    time: flight.actual,
    destination: flight['airportToID.city_en'],
    status: flight.status,
    company: flight['carrierID.code'],
    flightId: flight.codeShareData[0].codeShare,
  })),
);
