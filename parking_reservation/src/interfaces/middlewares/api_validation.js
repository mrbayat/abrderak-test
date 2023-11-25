const config = require('config');

const validations = require('../validation');

module.exports = (req, res, next) => {
  const schema = getSchema(req.baseUrl);
  if (validations[schema]) {
    const { error } = validations[schema].validate(req.body);
    if (error) {
      res.sendStatus(400);
    } else {
      next();
    }
  } else {
    next();
  }
};

const getSchema = (api) => {
  const baseUrl = config.baseUrl;
  return api.replace(baseUrl, '');
};
