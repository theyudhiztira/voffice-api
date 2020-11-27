const { body, validationResult } = require('express-validator');

module.exports = {
    registerValidator : () => {
        return [
            body('email').isEmail().normalizeEmail(),
            body('first_name').notEmpty().trim().escape(),
            body('last_name').notEmpty().trim().escape(),
            body('current_base').notEmpty().trim().escape(),
            body('dob').isDate().trim().escape(),
            body('phone').isMobilePhone("any").trim().escape(),
            body('user_group').notEmpty(),
            body('user_acl').notEmpty()
        ]
    },

    validate : (req, res, next) => {
        const errors = validationResult(req)
        if (errors.isEmpty()) {
            return next()
        }
        const extractedErrors = []
        errors.array().map(err => extractedErrors.push({
            [err.param]: err.msg
        }))

        return res.status(422).json({
            errors: extractedErrors,
        })
    }
}