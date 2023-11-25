const express = require('express'),
  router = express.Router();

const api = require('./api'),
  pricing = require('./pricing');

router.post(api.pricing.create, pricing.create);

module.exports = router;
