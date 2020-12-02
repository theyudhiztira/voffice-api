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

exports.showAll = (req, res) => {

    return model.locations
        .findAll()
        .then((result) => {
            return res.status(200).send({
                result: result
            });
        }).catch(err => {
            return res.status(500).send({
                message: err.message
            })
        });
};

exports.show = (req, res) => {

    let location_id = parseInt(req.params.location_id);
    
    return model.locations
        .findOne({
            where: {
                id: location_id
            }
        })
        .then((result) => {
            return res.status(200).send({
                result: result
            });
        }).catch(err => {
            return res.status(500).send({
                message: err.message
            })
        });
};