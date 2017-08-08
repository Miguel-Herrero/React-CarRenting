import { combineReducers } from 'redux';
import CarsReducer from './carsReducer';
import BookingsReducer from './bookingsReducer';

const rootReducer = combineReducers({
  cars: CarsReducer,
  bookings: BookingsReducer,
});

export default rootReducer;
