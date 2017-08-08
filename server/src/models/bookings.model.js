import mongoose from 'mongoose';
import config from '../config/config.dev';

/**
 * DATA SCHEMA
 */
const BookingSchema = mongoose.Schema({
    fromDate: { type: Date, required: true },
    toDate: { type: Date, required: true },
    created: { type: Date, default: Date.now }
}, {collection : 'Bookings'});

BookingSchema.index({fromDate: -1, toDate: -1}, {unique: false});

/**
 * DATA MODEL
 */
let BookingModel = mongoose.model('Booking', BookingSchema);

BookingModel.getAll = (callback) => {
  const query = BookingModel.find().sort({ fromDate: 'asc' });

  return query.exec();
}

BookingModel.getForRange = (from, to) => {

  const query = BookingModel.find({
    fromDate: { $lt: to + config.preparingTime }, // Take preparation time into account!
    toDate: { $gt: from - config.preparingTime }
  }).sort({ fromDate: 'asc' });

  return query.exec();
}

export default BookingModel;