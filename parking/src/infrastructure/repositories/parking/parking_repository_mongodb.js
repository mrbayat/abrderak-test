const mongoose = require('mongoose');

const parkingModel = require('../../orm/mongoose/schema/parking');

module.exports = class {
  async create({ parkingName, parkingAddress, cityId, cityName }) {
    return await new parkingModel({ parkingName, parkingAddress, cityId, cityName }).save();
  }

  async remove({ parkingId }) {
    const result = await this.findById({ parkingId });
    if (result) {
      await parkingModel.deleteOne({ _id: new mongoose.Types.ObjectId(parkingId) });
      return parkingId;
    }
    return null;
  }

  async findById({ parkingId }) {
    try {
      return await parkingModel.findOne({ _id: new mongoose.Types.ObjectId(parkingId) });
    } catch (error) {
      throw new Error(error);
    }
  }
};
