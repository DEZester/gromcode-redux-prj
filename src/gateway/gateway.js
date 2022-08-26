const baseUrl = `https://api.iev.aero/api/flights`;

const fetchFlights = date =>
  fetch(`${baseUrl}/${date}`).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error();
  });

export default fetchFlights;
