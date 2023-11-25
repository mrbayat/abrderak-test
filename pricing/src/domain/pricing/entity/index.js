module.exports = class Pricing {
  constructor({ pricingId = null, parkingName = '', parkingId = '', costRules }) {
    this.pricingId = pricingId;
    this.parkingName = parkingName;
    this.parkingId = parkingId;
    this.costRules = costRules;
  }

  static newPricing({ pricingId = null, parkingName, parkingId, costRules }) {
    return new Pricing({
      pricingId,
      parkingId,
      parkingName,
      costRules,
    });
  }
};
