import Car from '../models/cars.model';
import config from '../config/config.dev';

const controller = {};

controller.getAll = (req, res) => {
  res.send(`We have a total of ${config.totalCars} cars in our fleet!`);
}

controller.getAllAvailable = (req, res) => {
  const { from, to } = req.params;

  Car.getAllAvailable(from, to, (error, cars) => {
    res.send(`<h1>We have ${cars} available for your selected time range!</h1>`);
  })
}

export default controller;