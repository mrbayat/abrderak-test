const Parking = require('../../domain/parking/entity');

module.exports = async (data, { parkingRepository }) => {
  const { parkingName, parkingAddress, cityId, cityName } = data;

  const parking = Parking.create({ parkingName, parkingAddress, cityId, cityName });
  const { _id: parkingId } = await parkingRepository.create(parking);

  return {
    parkingId,
    cityId,
    cityName,
    parkingName,
    parkingAddress,
  };
};
