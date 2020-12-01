const model = require('../models');
// const modelUserAcl = require('../models').users_acl;
const {
    Op
} = require('sequelize');

const Validator = require('validatorjs');

exports.create = (req, res) => {

    let body = req.body;

    let data = {
        name: body.name,
        city: body.city,
        province: body.province,
        country: body.country,
        tax_id: body.tax_id,
        phone: body.phone,
        timezone: body.timezone,
        center_email: body.center_email,
        start_time: body.start_time,
        end_time: body.end_time,
        weekend_start_time: body.weekend_start_time,
        weekend_end_time: body.weekend_end_time,
        coordinates: body.coordinates,
        company_name: body.company_name,
        extension: body.extension,
        address: body.address,
        status: body.status,
        created_by: body.created_by
    };

    let rules = {
        name: 'required',
        email: 'required|email',
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
        status: "required",
        created_by: "required"
    };

    // let validation = new Validator(data, rules);

    let validation = new Validator({
        name: 'fdff',
        email: 'not an email address.com'
    }, {
        name: 'size:3',
        email: 'required|email'
    });

    // validation.fails(); // true
    // validation.passes(); // false

    console.log(validation.fails());

    if (validation.fails()){
        console.log(validation.errors.errors);
    }

    // return model.locations
    //     .create({
            
    //     }).then((result) => {
    //         return res.status(201).send({
    //             status: true
    //         });
    //     }).catch(err => {
    //         return res.status(500).send({
    //             message: err.message
    //         })
    //     });
};