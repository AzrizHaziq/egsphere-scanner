const express = require('express')
const machineRouter = express.Router()
const testConnectionRouter = express.Router({ mergeParams: true })

machineRouter.get('/', (req, res, next) => {
  res.json({ hello: 'world' })
})

machineRouter.use('/test-connection', testConnectionRouter)

testConnectionRouter.get('/', (req, res, next) => {
  res.status(400).json({ hello: 'test-connection' })
})


module.exports = machineRouter
