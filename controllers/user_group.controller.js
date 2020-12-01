const models = require('../models');

exports.create = (req, res) => {
    let body = req.body;

    return models.user_groups.create({
        name: body.name,
        created_by: 1
    }).then(result => {
        return res.status(201).send({
            status: true
        })
    }).catch(err => {
        return res.status(500).send({
            message: err.message
        })
    })
}