import Booking from '../models/bookings.model';
import config from '../config/config.dev';

const controller = {};

/**
 * Return a list of bookings
 */
controller.getAll = (req, res) => {
  Booking.getAll()
    .then((results) => {
      const reply = {
        availableCars: config.totalCars - results.length,
        bookings: results
      }
      res.send(reply);
    });
}

/**
 * Return the available cars for a range of time
 */
controller.getForRange = (req, res) => {
  let { from, to } = req.params;

  // Set the correct Number format for timestamps
  from = parseInt(from);
  to = parseInt(to);

  Booking.getForRange(from, to)
    .then((results) => {
      const reply = {
        availableCars: config.totalCars - results.length,
        bookings: results
      }
      res.send(reply);
    });
}

export default controller;