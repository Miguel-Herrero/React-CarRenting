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

BookingModel.getAllAvailable = (from, to, cb) => {

  // Set the correct Number format for timestamps
  from = parseInt(from);
  to = parseInt(to);

  const query = BookingModel.find({
    fromDate: { $lt: to + config.preparingTime }, // Take preparation time into account!
    toDate: { $gt: from - config.preparingTime }
  });

  query.exec((error, results) => {
    results.map((value) => {
      console.log(value.fromDate, value.toDate);
    })

    const totalAvailableCars = config.totalCars - results.length;

    return cb(null, totalAvailableCars);
  });
}

BookingModel.insertSamples = (callback) => {
  const bookinsSamples = [
    ['06/20/2017 16:00', '06/24/2017 16:00'],
    ['06/20/2017 16:00', '06/30/2017 16:00'],
    ['06/22/2017 16:00', '06/26/2017 16:00'],
    ['06/24/2017 16:01', '06/29/2017 16:00'],
    ['06/24/2017 17:00', '06/30/2017 16:00']
  ];

  bookinsSamples.map((booking) => {
    const docToInsert = new BookingModel({
      fromDate: booking[0],
      toDate: booking[1]
    });

    docToInsert.save((error) => {});
  });

  callback();
}

export default BookingModel;