const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const pricingSchema = new Schema(
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
    costRules: {
      heavyCar: {
        oneHour: {
          type: Number,
          required: true,
        },
        towToFourHour: {
          type: Number,
          required: true,
        },
        fourToEndTime: {
          type: Number,
          required: true,
        },
        perDay: {
          type: Number,
          required: true,
        },
      },
      car: {
        oneHour: {
          type: Number,
          required: true,
        },
        towToFourHour: {
          type: Number,
          required: true,
        },
        fourToEndTime: {
          type: Number,
          required: true,
        },
        perDay: {
          type: Number,
          required: true,
        },
      },
      motor: {
        oneHour: {
          type: Number,
          required: true,
        },
        towToFourHour: {
          type: Number,
          required: true,
        },
        fourToEndTime: {
          type: Number,
          required: true,
        },
        perDay: {
          type: Number,
          required: true,
        },
      },
    },
  },
  { collection: 'pricing' },
);

module.exports = mongoose.model('pricing', pricingSchema);
