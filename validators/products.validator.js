const Validator = require('validatorjs');

module.exports = {
    validate : (req, res, next) => {
        
        let rules = {
            name: "required",
            category: "required|integer",
            currency: "required",
            setup_fee: "required",
            price: "required",
            client_id: "required|integer",
            occupant: "required",
            room_capacity: "required",
            room_size: "required",
            view: "required",
            vCredit: "required",
            max_contacts: "required|integer",
            meeting_room: "required|integer",
            workstation: "required|integer",
            event_space: "required|integer",
            private_office: "required|integer",
            hellolive: "required|integer",
            livebox: "required|integer",
            meeting_room_cycle: "required|integer",
            workstation_cycle: "required|integer",
            event_space_cycle: "required|integer",
            private_office_cycle: "required|integer",
            hellolive_cycle: "required|integer",
            livebox_cycle: "required|integer"
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