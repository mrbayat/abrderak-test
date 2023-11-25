const express = require('express'),
  router = express.Router();

router.all('/', async (req, res, next) => {
  //check jwt token
  next();
});
module.exports = router;
