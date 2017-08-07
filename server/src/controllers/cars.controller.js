import Car from '../models/cars.model';
import config from '../config/config.dev';

const controller = {};

/**
 * Return a list of bookings
 */
controller.getAll = (req, res) => {
  Car.getAll()
    .then((results) => {
      res.send(results);
    });
}

/**
 * Insert some cars in database
 */
controller.insertSamples = (req, res) => {
  Car.insertSamples(() => {
    res.send('Docs inserted OK');
  })
}

/**
 * Return the available cars for a range of time
 */
controller.getAllAvailable = (req, res) => {
  const { from, to } = req.params;

  Car.getAllAvailable(from, to, (error, cars) => {

    res.send({ 
      availableCars: cars,
      from: from,
      to: to
    });
  })
}

export default controller;