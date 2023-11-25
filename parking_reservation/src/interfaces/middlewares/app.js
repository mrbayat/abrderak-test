const express = require('express'),
  helmet = require('helmet'),
  config = require('config'),
  compression = require('compression'),
  timeout = require('connect-timeout'),
  bodyParser = require('body-parser');

const auth = require('./auth'),
  baseUrl = config.baseUrl,
  routes = require('../routes'),
  notfound = require('./404'),
  apiValidation = require('./api_validation'),
  bootstrap = require('../../infrastructure/config/bootstrap');

const app = express();
bootstrap.init();

app.use(timeout('60s'));
app.use(compression());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(baseUrl + '*', auth);
app.use(baseUrl + '*', apiValidation);
app.use(baseUrl, routes);
app.use(notfound);

module.exports = app;
