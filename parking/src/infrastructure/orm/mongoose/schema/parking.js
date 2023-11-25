const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const parkingSchema = new Schema(
  {
    parkingName: {
      type: String,
      required: true,
      maxlength: 30,
    },
    parkingAddress: {
      type: String,
      required: true,
      maxlength: 100,
    },
    cityId: {
      type: Number,
      required: true,
    },
    cityName: {
      type: String,
      required: true,
      maxlength: 10,
    },
  },
  { collection: 'parking' },
);

module.exports = mongoose.model('parking', parkingSchema);
