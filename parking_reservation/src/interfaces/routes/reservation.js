const reservationController = require('../controllers/reservation');

let reservation = (module.exports = {});

reservation.newReservation = async (req, res) => {
  try {
    const data = await reservationController.newResarvation(req.body);
    if (data.reservationId) {
      res.send({ message: 'success', data });
    } else {
      res.status(500).send('error');
    }
  } catch (error) {
    res.status(500).send('error');
  }
};

reservation.calculateReservationPrice = async (req, res) => {
  try {
    const data = await reservationController.calculateReservationPrice(req.body);
    if (data.reservationId) {
      res.send({ message: 'success', data });
    } else {
      res.status(500).send('error');
    }
  } catch (error) {
    res.status(500).send('error');
  }
};
