const _serializeNewReservationId = ({ reservationId }) => {
  return {
    reservationId,
  };
};

const _serializeCalculateReservationPrice = ({ reservationId, amountPayable }) => {
  return {
    reservationId,
    amountPayable,
  };
};

module.exports = class {
  serialize(data) {
    if (!data) {
      throw new Error('Expect data to be not undefined nor null');
    }
    if (Array.isArray(data)) {
      return data.map(_serializeNewReservationId);
    }
    return _serializeNewReservationId(data);
  }

  serializeCalculateReservationPrice(data) {
    if (!data) {
      throw new Error('Expect data to be not undefined nor null');
    }
    if (Array.isArray(data)) {
      return data.map(_serializeCalculateReservationPrice);
    }
    return _serializeCalculateReservationPrice(data);
  }
};
