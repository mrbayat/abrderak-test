const define = require('node-constants')(exports),
  Joi = require('joi');

define({
  'v1/new_reservation': Joi.object()
    .keys({
      parkingName: Joi.string().max(30).required(),
      parkingId: Joi.string().max(30).required(),
      vehicleType: Joi.string().valid('heavyCar', 'car', 'motor').required(),
      numberplate: Joi.object({
        firstPart: Joi.number().min(10).max(99).required(),
        charPart: Joi.string().max(3).required(),
        secondPart: Joi.number().min(100).max(999).required(),
        endPart: Joi.number().min(10).max(99).required(),
      }).required(),
    })
    .unknown(),

  'v1/calculate_reservation_price': Joi.object()
    .keys({
      reservationId: Joi.string().required(),
    })
    .unknown(),
});
