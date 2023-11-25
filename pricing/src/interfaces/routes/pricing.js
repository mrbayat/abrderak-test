const pricingController = require('../controllers/pricing');

let pricing = (module.exports = {});

pricing.create = async (req, res) => {
  try {
    const data = await pricingController.newPricing(req.body);
    if (data.pricingId) {
      res.send({ message: 'success', data });
    } else {
      res.status(500).send('error');
    }
  } catch (error) {
    res.status(500).send('error');
  }
};
