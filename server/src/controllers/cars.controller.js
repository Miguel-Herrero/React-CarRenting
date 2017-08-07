import Car from '../models/cars.model';
import config from '../config/config.dev';

const controller = {};

controller.getAll = (req, res) => {
  res.send(`We have a total of ${config.totalCars} cars in our fleet!`);
}

controller.getAllAvailable = (req, res) => {
  const { from, to } = req.params;

  Car.getAllAvailable(from, to, (error, cars) => {

    // const availableCars = [];
    // availableCars.push({ 
    //   availableCars: cars,
    //   from: from,
    //   to: to
    // })
    // res.send(availableCars);

    res.send({ 
      availableCars: cars,
      from: from,
      to: to
    });
  })
}

export default controller;