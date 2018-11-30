const router = require('express').Router();
const asyncMiddleware = require('../middlewares/asyncMiddleware');
const eventsStore = require('../events');

router.get(
  '/events',
  asyncMiddleware(async (req, res) => {
    const events = await eventsStore.getAllEvents();
    res.send(events);
  }),
);

module.exports = router;
