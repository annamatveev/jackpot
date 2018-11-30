const events = require('../data/events');

function getAllEvents() {
  return new Promise(resolve => resolve(events));
}

module.exports = {
  getAllEvents,
};
