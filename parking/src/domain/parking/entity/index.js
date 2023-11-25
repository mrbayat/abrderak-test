module.exports = class Parking {
  constructor({ parkingId = null, parkingName = '', parkingAddress = '', cityId = 0, cityName = '' }) {
    this.parkingId = parkingId;
    this.parkingName = parkingName;
    this.parkingAddress = parkingAddress;
    this.cityId = cityId;
    this.cityName = cityName;
  }

  static create({ parkingId = null, parkingName, parkingAddress, cityId, cityName }) {
    return new Parking({
      parkingId,
      parkingName,
      parkingAddress,
      cityId,
      cityName,
    });
  }
};
