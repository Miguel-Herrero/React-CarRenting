import { combineReducers } from 'redux';
import BookingsReducer from './bookingsReducer';

const rootReducer = combineReducers({
  bookings: BookingsReducer,
});

export default rootReducer;
