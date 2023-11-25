const config = require('config');

const EventsAmqp = require('../events/amqp');
const Serializer = require('../../interfaces/serializers');

function build() {
  const services = {
    events: new EventsAmqp(),
    reservationSerializer: new Serializer.ReservationSerializer(),
  };

  switch (config.supportDatabase) {
    case 'mongodb':
      const ReservationRepositoryMongodb = require('../repositories/reservation/reservation_repository_mongodb');

      services.reservationRepository = new ReservationRepositoryMongodb();

      break;
    default:
      break;
  }
  return services;
}

module.exports = build();
