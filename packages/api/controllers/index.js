const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.json({ hello: 'world' })
});

router.get('/ping', (req, res, next) => {
  res.json({ ping: 'pong azirz' })
});

module.exports = router;
