const amqp = require('amqplib/callback_api');
const config = require('config');

const generateUuid = () => Math.random().toString() + Math.random().toString() + Math.random().toString();

exports.execute = (channel_name, data, callback) => {
  const opt = {
    credentials: require('amqplib').credentials.plain(process.env.RABBITMQ_USER, process.env.RABBITMQ_PASSWORD),
  };
  const rabbitmQUrl = config.rabbitmQ.perUrl + process.env.RABBITMQ_URL;

  amqp.connect(rabbitmQUrl, opt, (err, connection) => {
    if (!err) {
      connection.createChannel((err, channel) => {
        if (!err) {
          channel.assertQueue('', { exclusive: true }, (err, q) => {
            if (!err) {
              let correlationId = generateUuid();
              channel.consume(
                q.queue,
                (msg) => {
                  if (msg.properties.correlationId === correlationId) {
                    let data = msg.content;
                    data = data.toString('utf8');
                    connection.close();
                    callback('', data);
                  }
                },
                { noAck: true },
              );
              channel.sendToQueue(channel_name, Buffer.from(JSON.stringify(data)), {
                correlationId: correlationId,
                replyTo: q.queue,
              });
            } else callback(err, '');
          });
        } else callback(err, '');
      });
    } else callback(err, 'error');
  });
};
