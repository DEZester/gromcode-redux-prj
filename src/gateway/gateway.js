const baseUrl = `https://api.iev.aero/api/flights/22-01-2022`;

const fetchFlights = () =>
  fetch(baseUrl).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error();
  });

export default fetchFlights;
