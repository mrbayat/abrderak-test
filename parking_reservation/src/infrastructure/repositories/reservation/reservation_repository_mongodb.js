const mongoose = require('mongoose');

const reservationModel = require('../../orm/mongoose/schema/reservation');

module.exports = class {
  async create({ parkingName, parkingId, vehicleType, numberplate, createdDate }) {
    return await new reservationModel({ parkingName, parkingId, vehicleType, numberplate, createdDate }).save();
  }

  async findById({ reservationId }) {
    try {
      return await reservationModel.findOne({ _id: new mongoose.Types.ObjectId(reservationId) });
    } catch (error) {
      throw new Error(error);
    }
  }
};
