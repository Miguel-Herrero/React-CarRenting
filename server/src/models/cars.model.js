import config from '../config/config.dev';

const CarsModel = {};

CarsModel.getAllAvailable = (from, to, cb) => {

  // TO-DO: Mongoose find
  const bookings = [
    [1497974400000, 1498320000000],
    [1497974400000, 1498838400000],
    [1498147200000, 1498492800000],
    [1498320060000, 1498752000000],
    [1498323600000, 1498838400000]
  ];


  // Check whether a booking is between the requested time range
  var bookingsChecked = bookings.reduce(function(itemsBooked, booking) {
    if (from <= (booking[1] + config.preparingTime) && to >= (booking[0] - config.preparingTime)) {
      // console.log('Esta reserva está en el período seleccionado', booking);
      itemsBooked.push(booking);
    } else {
      // console.log('Esta reserva NO está en el período seleccionado');
    }
    return itemsBooked;
  }, []);

  // console.log('Items booked = ' + bookingsChecked.length, bookingsChecked);
  // console.log('Free cars', config.totalCars - bookingsChecked.length);



  return cb(null, config.totalCars - bookingsChecked.length);
}

export default CarsModel;