const mongoose = require("mongoose");
const configPackage = require('config');

const config = configPackage.get('app.mongo');

const host = process.env.APP_HOST || config.host;
const port = process.env.MONGO_PORT|| config.port;
const database = process.env.MONGO_DATABASE || config.database;

const connection = mongoose.createConnection(
  `mongodb://${host}:${port}/${database}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// https://stackoverflow.com/a/51962721
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

/**
 * best practice is to use factory or singleton pattern
 */
module.exports = connection;
