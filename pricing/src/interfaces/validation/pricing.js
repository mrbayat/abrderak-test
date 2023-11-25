const define = require('node-constants')(exports),
  Joi = require('joi');

define({
  'v1/new_pricing': Joi.object()
    .keys({
      parkingName: Joi.string().max(30).required(),
      parkingId: Joi.string().max(30).required(),
      costRules: Joi.required(),
    })
    .unknown(),
});
