import Mongoose from 'mongoose';
import config from '../config/config.dev'

const connectToDb = () => {
    const { dbHost, dbPort, dbName } = config;
    const mongoUri = `mongodb://${dbHost}:${dbPort}/${dbName}`;

    // As is deprecated from Mongoose 4.1, set our own Promises library
    Mongoose.Promise = global.Promise;
    
    // Connect to MongoDB
    const connection = Mongoose.connect(mongoUri, {
      useMongoClient: true,
      promiseLibrary: global.Promise,
    });

    connection.then(function(db) {
      console.info(`Connected to MongoDB at ${mongoUri}`); // eslint-disable-line no-console
    });
}

export default connectToDb;