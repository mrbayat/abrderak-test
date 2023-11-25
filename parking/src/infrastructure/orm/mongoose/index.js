const mongoose = require('mongoose'),
  config = require('config');

const options = config.db.mongodbConfig.options;
const host = process.env.MONGO_HOST;
const port = process.env.MONGO_PORT;
const url = `${config.db.mongodbConfig.perUrl}${host}:${port}/${config.db.name}`;

const db = mongoose.connect(url, options);

module.exports = db;
