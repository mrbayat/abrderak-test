const _serializeCreateParking = ({ parkingName, parkingAddress, cityId, cityName, parkingId }) => {
  return {
    parkingName,
    parkingAddress,
    cityId,
    cityName,
    parkingId,
  };
};

const _serializeRemoveParking = ({ parkingId }) => {
  return {
    parkingId,
  };
};

module.exports = class {
  serialize(data) {
    if (!data) {
      throw new Error('Expect data to be not undefined nor null');
    }
    if (Array.isArray(data)) {
      return data.map(_serializeCreateParking);
    }
    return _serializeCreateParking(data);
  }

  serializeRemoveParking(data) {
    if (!data) {
      throw new Error('Expect data to be not undefined nor null');
    }
    if (Array.isArray(data)) {
      return data.map(_serializeRemoveParking);
    }
    return _serializeRemoveParking(data);
  }
};
