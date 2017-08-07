import { FETCH_CARS_AVAILABLE } from '../actions/';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_CARS_AVAILABLE:
      return action.payload.data;
  
    default:
      return state;
  }
}