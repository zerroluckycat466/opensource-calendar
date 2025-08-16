const express = require('express');
const eventsRouter = require('./events');
const router = express.Router();

router.use('/events', eventsRouter);

module.exports = router;
