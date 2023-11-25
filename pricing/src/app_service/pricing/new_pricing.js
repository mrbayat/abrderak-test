const Pricing = require('../../domain/pricing/entity');

module.exports = async (data, { pricingRepository }) => {
  const { parkingName, parkingId, costRules } = data;

  const pricing = Pricing.newPricing({ parkingName, parkingId, costRules });
  const { _id: pricingId } = await pricingRepository.create(pricing);

  return {
    pricingId,
    parkingName,
    parkingId,
    costRules,
  };
};
