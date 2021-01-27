const Validator = require('validatorjs');

module.exports = {
    validate : (req, res, next) => {
        
        let rules = {
            location_id: "required",
            company_id: "required",
            amount_due: "required"
        };
        
        let validation = new Validator(req.body, rules); //(form input, rules) 

        if (!validation.fails()){
            return next();
        }
        
        let errors = validation.errors.errors;

        const extractedErrors = [];
        for (var key in errors) {
            extractedErrors.push(errors[key][0]);
        }

        return res.status(422).json({
            errors: extractedErrors,
        })
    }
}