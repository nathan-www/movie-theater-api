const { check } = require('express-validator')
const ValidatorGenerator = require('./validator')

const userIdValidator = ValidatorGenerator(check('userId').isNumeric())

module.exports = { userIdValidator }
