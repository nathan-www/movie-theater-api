const { validationResult } = require('express-validator')

// Generate middleware array from express-validator middleware
// Handles error immediately if validation fails, rather than needing to check for errors in the route handler

const Validator = (...middlewares) => {
    return [
        ...middlewares,
        (req, res, next) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                throw errors
            } else {
                next()
            }
        }
    ]
}

module.exports = Validator
