const express = require('express'),
  router = express.Router();

const api = require('./api'),
  reservation = require('./reservation');

router
  .post(api.reservation.new, reservation.newReservation)
  .post(api.reservation.calculateReservationPrice, reservation.calculateReservationPrice);

module.exports = router;
