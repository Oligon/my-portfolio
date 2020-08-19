// eslint-disable-next-line import/no-extraneous-dependencies
const percyHealthCheck = require('@percy/cypress/task');

module.exports = (on, config) => {
  on('task', percyHealthCheck);
  return config;
};
