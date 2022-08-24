const baseUrl = `https://api.iev.aero/api/flights/22-01-2022`;

const fetchFlights = () => fetch(baseUrl).then(response => response.json());

export default fetchFlights;
