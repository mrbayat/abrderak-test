const Reservation = require('../../domain/reservation/entity');

module.exports = async (data, { reservationRepository }) => {
  const { parkingName, parkingId, vehicleType, numberplate } = data;

  const reservation = Reservation.newReservation({ parkingName, parkingId, vehicleType, numberplate });
  const { _id: reservationId } = await reservationRepository.create(reservation);

  return {
    reservationId,
    parkingName,
    parkingId,
    vehicleType,
    numberplate,
  };
};
