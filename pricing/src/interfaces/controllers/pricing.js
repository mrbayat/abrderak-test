const serviceLocator = require('../../infrastructure/config/service-locator');
const { NewPricing } = require('../../app_service/pricing');

module.exports = {
  async newPricing(data) {
    const { parkingName, parkingId, costRules } = data;
    const pricing = await NewPricing({ parkingName, parkingId, costRules }, serviceLocator);
    return serviceLocator.pricingSerializer.serialize(pricing);
  },
};
