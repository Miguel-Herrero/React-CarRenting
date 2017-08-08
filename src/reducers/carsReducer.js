import { FETCH_CARS_AVAILABLE, FETCH_CARS_BOOKED } from '../actions/';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_CARS_BOOKED:
      console.log(action.payload.data);
      return action.payload.data;
    case FETCH_CARS_AVAILABLE:
      return action.payload.data;
    default:
      return state;
  }
}