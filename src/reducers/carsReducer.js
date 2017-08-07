import { FETCH_CARS_AVAILABLE } from '../actions/';
// import _ from 'lodash';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_CARS_AVAILABLE:
      console.log('Payload data ', action.payload.data);
      return action.payload.data;
  
    default:
      return state;
  }
}