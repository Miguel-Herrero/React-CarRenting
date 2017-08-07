import Express from 'express';
import bodyParser from 'body-parser';
import cors from "cors";
import morgan from 'morgan'
import cars from './src/routes/cars.route';
import config from './src/config/config.dev';
// import Schema from './schema';

const APP_PORT = 4000;
const port = config.serverPort;

const app = Express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("dev"));

app.use('/api/cars', cars);

//Index route
app.get('/', (req, res) => {
    res.send('Invalid endpoint!');
});

app.listen(port, () => {
  console.log(`App listening on port ${APP_PORT}`); // eslint-disable-line no-console
});