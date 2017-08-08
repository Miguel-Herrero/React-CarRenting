import { FETCH_BOOKINGS } from '../actions/';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_BOOKINGS:
      return action.payload.data;
    default:
      return state;
  }
}