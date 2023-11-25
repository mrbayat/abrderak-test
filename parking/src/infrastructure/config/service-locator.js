const config = require('config');

const Serializer = require('../../interfaces/serializers');

function build() {
  const services = {
    parkingSerializer: new Serializer.ParkingSerializer(),
  };

  switch (config.supportDatabase) {
    case 'mongodb':
      const ParkingRepositoryMongodb = require('../repositories/parking/parking_repository_mongodb');

      services.parkingRepository = new ParkingRepositoryMongodb();

      break;
    default:
      break;
  }
  return services;
}

module.exports = build();
