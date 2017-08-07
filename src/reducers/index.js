import { combineReducers } from 'redux';
import CarsReducer from './carsReducer';

const rootReducer = combineReducers({
  cars: CarsReducer
});

export default rootReducer;
