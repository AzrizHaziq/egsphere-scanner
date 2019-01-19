const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.json({ hello: 'world' })
})

router.get('/ping', (req, res, next) => {
  res.json({ ping: 'pong azirz' })
})

router.get('/test-json', (req, res, next) => {
  res.json({
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false,
  })
})

module.exports = router
