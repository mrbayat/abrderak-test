const cluster = require('cluster');

const workers = [];
if (cluster.isMaster) {
  const numWorkers = require('os').cpus().length;

  for (var i = 0; i < numWorkers; i++) {
    const worker = cluster.fork({ RUN_CRON: i === 0, wid: i + 1 });
    workers.push(worker);
  }

  cluster.on('exit', (worker, code, signal) => {
    if (workers[0].process.pid == worker.process.pid) workers[0] = cluster.fork({ RUN_CRON: true, wid: worker.id });
    else cluster.fork({ RUN_CRON: false, wid: worker.id });
  });
} else {
  if (process.env.RUN_CRON === 'true') {
    require('../../infrastructure/config/bootstrap').init();
    require('../../infrastructure/events/amqp/rpc_server');
  } else {
    require('../server/www');
  }
}
