const serviceLocator = require('../../infrastructure/config/service-locator');
const { NewReservation, CalculateReservationPrice } = require('../../app_service/reservation');

module.exports = {
  async newResarvation(data) {
    const { parkingName, parkingId, vehicleType, numberplate } = data;
    const reservation = await NewReservation({ parkingName, parkingId, vehicleType, numberplate }, serviceLocator);
    return serviceLocator.reservationSerializer.serialize(reservation);
  },

  async calculateReservationPrice(data) {
    const { reservationId } = data;
    const result = await CalculateReservationPrice({ reservationId }, serviceLocator);
    return serviceLocator.reservationSerializer.serializeCalculateReservationPrice(result);
  },
};
