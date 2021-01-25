const ValidatorJs = require('validatorjs');

const self = module.exports = {
    create : (req, res, next) => {
        const rules = {
            first_name: "required",
            // last_name: "nullable",
            email: "required|email",
            phone: "required",
            // whatsapp: "nullable",
            business_needs: "array",
            discovery_source: "required"
            // web_register: "nullable"
        };

        self.validate(req.body, rules)
        .then(() => {
            return next();
        })
        .catch(err => {
            console.log(err);
            return res.status(400).send(err);
        });
    },

    edit : (req, res, next) => {
        const rules = {
            first_name: "required",
            // last_name: "nullable",
            email: "required|email",
            phone: "required",
            // whatsapp: "nullable",
            business_needs: "array",
            discovery_source: "required"
        }

        self.validate(req.body, rules)
        .then(() => {
            return next();
        })
        .catch(err => {
            return res.status(400).send(err);
        });
    },

    validate : (input, rules) => {
        return new Promise((resolve, reject) => {
            const validation = new ValidatorJs(input, rules);
        
            if(validation.fails()){
                return reject(validation.errors.all());
            }

            return resolve(true);
        });
    }
}