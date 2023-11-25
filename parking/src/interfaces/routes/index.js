const express = require('express'),
  router = express.Router();

const api = require('./api'),
  parking = require('./parking');

router.delete(api.parking.remove, parking.remove).post(api.parking.create, parking.create);

module.exports = router;
