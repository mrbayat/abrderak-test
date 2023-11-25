const define = require('node-constants')(exports),
  Joi = require('joi');

define({
  'v1/parking_create': Joi.object()
    .keys({
      parkingName: Joi.string().max(30).required(),
      parkingAddress: Joi.string().max(100).required(),
      cityId: Joi.number().required(),
      cityName: Joi.string().max(10).required(),
    })
    .unknown(),
});
