import axios from 'axios';

const ROOT_URL = 'http://localhost:4000/api';

export const FETCH_CARS_AVAILABLE = 'fetch_cars_available';

export function fetchCarsAvailable(from, to, callback) {
  const url = `${ROOT_URL}/cars/from/${from}/to/${to}`;

  const request = axios.get(url)

  return {
    type: FETCH_CARS_AVAILABLE,
    payload: request
  }
}