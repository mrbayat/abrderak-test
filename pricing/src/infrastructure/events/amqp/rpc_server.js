const amqp = require('amqplib/callback_api'),
  config = require('config');

require('dotenv').config();
const serviceLocator = require('../../config/service-locator');
const { CalculateReservationPrice } = require('../../../app_service/pricing');

const opt = {
  credentials: require('amqplib').credentials.plain(process.env.RABBITMQ_USER, process.env.RABBITMQ_PASSWORD),
};
const rabbitmQUrl = config.rabbitmQ.perUrl + process.env.RABBITMQ_URL;

const connect = () =>
  amqp.connect(rabbitmQUrl, opt, (errorConnect, connection) => {
    if (errorConnect) {
      setTimeout(connect, config.rabbitmQ.setTimeReconnect);
    } else {
      connection.createChannel((error1, channel) => {
        if (error1) throw error1;
        create_channel(channel, config.eventName.calculateReservationPrice);
      });
    }
  });

const create_channel = async (channel, queue) => {
  channel.assertQueue(queue, { durable: true });
  channel.prefetch(1);
  await channel.consume(queue, async function reply(msg) {
    let data = msg.content.toString();
    let result = await eventsProcess(queue, data);
    channel.sendToQueue(msg.properties.replyTo, Buffer.from(JSON.stringify(result)), {
      correlationId: msg.properties.correlationId,
    });
    channel.ack(msg);
  });
};

const eventsProcess = async (queue, eventsData) => {
  try {
    switch (queue) {
      case config.eventName.calculateReservationPrice:
        return await CalculateReservationPrice(eventsData, serviceLocator);
      default:
        throw 'Not Found Channel : ' + queue;
    }
  } catch (error) {
    return error;
  }
};

connect();
