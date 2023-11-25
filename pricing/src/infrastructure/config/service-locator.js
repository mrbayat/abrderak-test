const config = require('config');

const Serializer = require('../../interfaces/serializers');

function build() {
  const services = {
    pricingSerializer: new Serializer.PricingSerializer(),
  };

  switch (config.supportDatabase) {
    case 'mongodb':
      const PricingRepositoryMongodb = require('../repositories/pricing/pricing_repository_mongodb');

      services.pricingRepository = new PricingRepositoryMongodb();

      break;
    default:
      break;
  }
  return services;
}

module.exports = build();
