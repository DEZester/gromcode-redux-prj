const baseUrl = `https://api.iev.aero/api/flights/22-01-2022`;

const fetchFlights = () =>
  fetch(baseUrl)
    .then(response => response.json())
    .then(data => console.log(data));

export default fetchFlights;
