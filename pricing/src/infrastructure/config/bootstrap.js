const config = require('config');

module.exports = {
  async init() {
    require('dotenv').config();
    switch (config.supportDatabase) {
      case 'mongodb':
        require('../orm/mongoose');
        break;
      default:
        require('../orm/mongoose');
        break;
    }
  },
};
