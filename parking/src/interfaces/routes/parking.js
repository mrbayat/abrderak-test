const parkingController = require('../controllers/parking');

let parking = (module.exports = {});

parking.create = async (req, res) => {
  try {
    const data = await parkingController.create(req.body);
    if (data.parkingId) {
      res.send({ message: 'success', data });
    } else {
      res.status(500).send('error');
    }
  } catch (error) {
    res.status(500).send('error');
  }
};

parking.remove = async (req, res) => {
  try {
    const { parkingId } = req.params;
    const data = await parkingController.remove({ parkingId });
    if (data.parkingId) {
      res.send({ message: 'success', data });
    } else {
      res.status(404).send('error');
    }
  } catch (error) {
    res.status(500).send('error');
  }
};
