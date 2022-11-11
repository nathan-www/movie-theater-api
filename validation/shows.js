const { check } = require('express-validator')
const ValidatorGenerator = require('./validator')

const showIdValidator = ValidatorGenerator(check('showId').isNumeric())

const genreIdValidator = ValidatorGenerator(check('genreId').isIn(['Comedy','Drama','Horror','Sitcom']))

const ratingValidator = ValidatorGenerator(check('rating').isInt({min: 0, max: 10}))

const statusValidator = ValidatorGenerator(check('status').trim().isLength({ min: 5, max: 25 }))

module.exports = { showIdValidator, genreIdValidator, ratingValidator, statusValidator }
