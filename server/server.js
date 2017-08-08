import Express from 'express';
import bodyParser from 'body-parser';
import cors from "cors";
import morgan from 'morgan'
import cars from './src/routes/cars.route';
import bookings from './src/routes/bookings.route';
import config from './src/config/config.dev';
import connectToDb from './src/db/connect';

const APP_PORT = 4000;
const port = config.serverPort;

connectToDb();

const app = Express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("dev"));

app.use('/api/cars', cars);
app.use('/api/bookings', bookings);

//Index route
app.get('/', (req, res) => {
    res.send('Invalid endpoint!');
});

app.listen(port, () => {
  console.log(`App listening on port ${APP_PORT}`); // eslint-disable-line no-console
});