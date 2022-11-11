const router = require('express').Router()
const users = require('./users')
const shows = require('./shows')

router.use('/users', users)
router.use('/shows', shows)

module.exports = router
