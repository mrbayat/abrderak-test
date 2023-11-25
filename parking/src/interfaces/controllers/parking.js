const serviceLocator = require('../../infrastructure/config/service-locator');
const { CreateParking, RemoveParking } = require('../../app_service/parking');

module.exports = {
  async create(data) {
    const { parkingName, parkingAddress, cityId, cityName } = data;
    const parking = await CreateParking({ parkingName, parkingAddress, cityId, cityName }, serviceLocator);
    return serviceLocator.parkingSerializer.serialize(parking);
  },

  async remove(data) {
    const { parkingId } = data;
    const parking = await RemoveParking({ parkingId }, serviceLocator);
    return serviceLocator.parkingSerializer.serializeRemoveParking(parking);
  },
};
