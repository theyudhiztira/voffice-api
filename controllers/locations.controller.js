const model = require('../models');
const {
    Op
} = require('sequelize');

exports.create = (req, res) => {

    let body = req.body;

    return model.locations
        .create(body)
        .then((result) => {
            return res.status(201).send({
                status: true
            });
        }).catch(err => {
            return res.status(500).send({
                message: err.message
            })
        });
};