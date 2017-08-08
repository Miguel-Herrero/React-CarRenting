import { FETCH_BOOKINGS } from '../actions/';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_BOOKINGS:
      console.log(action.payload.data);
      return action.payload.data;
    default:
      return state;
  }
}