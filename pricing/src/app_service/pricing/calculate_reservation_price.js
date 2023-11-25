const moment = require('moment');
const momentJalaali = require('moment-jalaali');

module.exports = async (data, { pricingRepository }) => {
  try {
    data = JSON.parse(data);
    const { parkingId } = data;

    const pricing = await pricingRepository.findByParkingId({ parkingId });
    if (pricing) {
      const amountPayable = calculateAmountPayable(pricing, data);

      return amountPayable;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

const numberplateFreeCost = ['الف', 'پ', 'ث', 'ز', 'ش', 'ف'];

const calculateAmountPayable = (pricing, reservationInfo) => {
  const { costRules } = pricing;
  const { vehicleType, createdDate, numberplate } = reservationInfo;
  const { charPart } = numberplate;

  if (numberplateFreeCost.includes(charPart)) {
    return 0;
  }
  let amountPayable = 0;
  const cost = costByVehicleType(vehicleType, costRules);
  const { days, hour } = timeSpentInParking(createdDate);

  days.forEach((day) => {
    const { perDay } = calculateCostByEventsDay(cost, day);
    amountPayable += perDay;
  });

  const { oneHour, towToFourHour, fourToEndTime } = calculateCostByEventsDay(cost, moment().format('YYYY-MM-DD'));
  if (hour <= 1) {
    amountPayable += oneHour * hour;
  } else if (hour >= 2 && hour <= 4) {
    amountPayable += towToFourHour * hour;
  } else {
    amountPayable += fourToEndTime * hour;
  }

  return amountPayable;
};

const costByVehicleType = (vehicleType, costRules) => costRules[vehicleType];

const timeSpentInParking = (reservationDate) => {
  const now = moment();
  const duration = moment.duration(now.diff(reservationDate));
  const days = duration.asDays();

  if (days >= 1) {
    const tempDays = [];
    for (var i = 0; i < parseInt(days); i++) {
      tempDays.push(moment(reservationDate).add(i, 'days').format('YYYY-MM-DD'));
    }

    return {
      days: tempDays,
      hour: parseInt(moment().format('HH')),
    };
  }
  return {
    day: [],
    hour: parseInt(duration.asHours()),
  };
};

const calculateCostByEventsDay = (cost, day) => {
  const daysPriceHigh = [];
  const pricing = { ...cost };
  const discountDays = ['Monday', 'Tuesday'];
  const dayName = moment(day).format('dddd');
  const jalaliFirstDayOfCurrentYear = `${momentJalaali().format('jYYYY')}-01-01`;

  for (var i = 0; i <= 4; i++) {
    daysPriceHigh.push(momentJalaali(jalaliFirstDayOfCurrentYear, 'jYYYY-jMM-jDD').add(i, 'days').format('YYYY-MM-DD'));
  }

  if (daysPriceHigh.includes(day)) {
    Object.keys(cost).forEach((item) => {
      pricing[item] += cost[item] * 0.2;
    });
  }

  if (discountDays.includes(dayName)) {
    Object.keys(cost).forEach((item) => {
      pricing[item] -= cost[item] * 0.1;
    });
  }

  return pricing;
};
