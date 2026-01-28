if (process.env.NODE_ENV === 'development') {
  const { worker } = require('../services/mocks/browser');
  worker.start();
}
