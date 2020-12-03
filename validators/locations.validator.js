const Validator = require('validatorjs');

module.exports = {
    validate : (req, res, next) => {
        
        let rules = {
            name: "required",
            city: "required",
            province: "required",
            country: "required",
            tax_id: "required",
            phone: "required",
            timezone: "required",
            center_email: "required|email",
            start_time: "required|integer",
            end_time: "required|integer",
            weekend_start_time: "required|integer",
            weekend_end_time: "required|integer",
            coordinates: "required",
            company_name: "required",
            extension: "required",
            address: "required",
            status: "required"
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