const rpcClient = require('./rpc_client');

module.exports = class {
  async rpcClientHandler(channel_name, message) {
    return new Promise((resolve, reject) => {
      rpcClient.execute(channel_name, message, (err, result) => {
        if (!err) {
          resolve(result);
        } else if (err && result == 'error') {
          throw new Error('error rabbitmq client');
        } else {
          reject(err);
        }
      });
    });
  }
};
