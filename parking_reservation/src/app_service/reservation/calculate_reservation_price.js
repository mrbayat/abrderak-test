const config = require('config');

module.exports = async ({ reservationId }, { reservationRepository, events }) => {
  const reservationData = await reservationRepository.findById({ reservationId });
  if (reservationData) {
    const amountPayable = await events.rpcClientHandler(config.eventName.calculateReservationPrice, reservationData);

    return {
      reservationId,
      amountPayable,
    };
  } else {
    return null;
  }
};
