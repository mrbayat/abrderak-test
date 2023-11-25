const moment = require('moment');

module.exports = class Reservation {
  constructor({ reservationId = null, parkingName = '', parkingId = '', vehicleType = 0, numberplate = '' }) {
    this.reservationId = reservationId;
    this.parkingName = parkingName;
    this.parkingId = parkingId;
    this.vehicleType = vehicleType;
    this.numberplate = numberplate;
    this.createdDate = moment().format('YYYY-MM-DD HH:mm:ss');
  }

  static newReservation({ reservationId = null, parkingName, parkingId, vehicleType, numberplate }) {
    return new Reservation({
      reservationId,
      parkingId,
      parkingName,
      vehicleType,
      numberplate,
    });
  }
};
