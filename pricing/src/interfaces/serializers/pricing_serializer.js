const _serializeNewPricing = ({ parkingId, parkingName, costRules, pricingId }) => {
  return {
    parkingId,
    parkingName,
    costRules,
    pricingId,
  };
};

module.exports = class {
  serialize(data) {
    if (!data) {
      throw new Error('Expect data to be not undefined nor null');
    }
    if (Array.isArray(data)) {
      return data.map(_serializeNewPricing);
    }
    return _serializeNewPricing(data);
  }
};
