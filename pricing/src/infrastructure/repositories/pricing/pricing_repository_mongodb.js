const mongoose = require('mongoose');

const pricingModel = require('../../orm/mongoose/schema/pricing');

module.exports = class {
  async create({ parkingName, parkingId, costRules }) {
    return await new pricingModel({ parkingName, parkingId, costRules }).save();
  }

  async findByParkingId({ parkingId }) {
    try {
      return await pricingModel.findOne({ parkingId });
    } catch (error) {
      throw new Error(error);
    }
  }
};
