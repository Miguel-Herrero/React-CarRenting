import Mongoose from 'mongoose';
import config from '../config/config.dev'

const connectToDb = () => {
    const { dbUri } = config;

    // As is deprecated from Mongoose 4.1, set our own Promises library
    Mongoose.Promise = global.Promise;
    
    // Connect to MongoDB
    const connection = Mongoose.connect(dbUri, {
      useMongoClient: true,
      promiseLibrary: global.Promise,
    });

    connection.then(function(db) {
      console.info(`Connected to MongoDB at mongodb://*****:*****${dbUri.substring(dbUri.indexOf('@'))}`); // eslint-disable-line no-console
    });
}

export default connectToDb;