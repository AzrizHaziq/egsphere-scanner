const express = require('express')
const machineRouter = express.Router()
const testConnectionRouter = express.Router({ mergeParams: true })

machineRouter.get('/', (req, res, next) => {
  res.json({ hello: 'world' })
})

testConnectionRouter.post('/connection', (req, res, next) => {
  console.log(req.body)
  res.status(400).json({ hello: 'test-connection' })
})

machineRouter.use('/', testConnectionRouter)

module.exports = machineRouter
