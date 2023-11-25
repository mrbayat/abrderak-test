const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const reservationSchema = new Schema(
  {
    parkingName: {
      type: String,
      required: true,
      maxlength: 30,
    },
    parkingId: {
      type: String,
      required: true,
    },
    vehicleType: {
      type: String,
      required: true,
      enum: ['heavyCar', 'car', 'motor'],
    },
    numberplate: {
      firstPart: {
        type: Number,
        required: true,
      },
      charPart: {
        type: String,
        required: true,
      },
      secondPart: {
        type: Number,
        required: true,
      },
      endPart: {
        type: Number,
        required: true,
      },
    },
    createdDate: {
      type: Date,
      required: true,
    },
  },
  { collection: 'reservation' },
);

module.exports = mongoose.model('reservation', reservationSchema);
