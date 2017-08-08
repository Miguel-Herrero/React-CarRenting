import axios from 'axios';

const ROOT_URL = 'http://localhost:4000/api';

export const FETCH_CARS_AVAILABLE = 'fetch_cars_available';
export const FETCH_CARS_BOOKED = 'fetch_cars_booked';
export const FETCH_BOOKINGS = 'fetch_bookings';

export function fetchBookings(from, to, callback) {

  let url = `${ROOT_URL}/bookings`;

  if (from != undefined && to != undefined) {
    url += `/from/${from}/to/${to}`;
  }

  console.log(url);

  const request = axios.get(url);

  return {
    type: FETCH_BOOKINGS,
    payload: request
  }
}

export function fetchCarsAvailable(from, to, callback) {
  const url = `${ROOT_URL}/cars/from/${from}/to/${to}`;

  const request = axios.get(url)

  return {
    type: FETCH_CARS_AVAILABLE,
    payload: request
  }
}

export function fetchCarsBooked() {
  const url = `${ROOT_URL}/cars/`;

  const request = axios.get(url);

  return {
    type: FETCH_CARS_BOOKED,
    payload: request
  }
}