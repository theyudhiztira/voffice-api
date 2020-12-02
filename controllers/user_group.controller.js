const models = require('../models');
const {
    Op
} = require('sequelize');

exports.create = (req, res) => {
    let body = req.body;

    return models.user_groups.create({
        name: body.name,
        created_by: req.userData.userId
    }).then(() => res.status(201).send({
            status: true
        })
    ).catch(err => res.status(500).send({
            message: err.message
        })
    )
}


exports.showAll = (req, res) => {
    return models.user_groups
    .findAll()
    .then(result => res.status(200).send(result)
    ).catch(err => res.status(500).send({
            message: err.message
        })
    )
}

exports.show = (req, res) => {
    return models.user_groups.findOne({
        where: {
            id: req.params.id
        }
    }).then(result => res.status(200).send(result.dataValues)
    ).catch(err => res.status(500).send({
            message: err.message
        })
    )
}

exports.update = (req, res) => {
    let body = req.body;
    return models.user_groups.update({
            name: body.name,
            updated_by: req.userData.userId,
        }, {
            where: {
                id: req.params.id
            }
        }).then(result => res.status(201).send({
            status: true,
            data: result.dataValues
        })).catch(err => res.status(500).send({
            message: err.message
        }))
}

exports.delete = (req, res) => {
    return models.user_groups.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => res.status(201).send({
        status: true,
        message: "Data Deleted Successfully"
    })).catch(err => res.send(500).send({
        status: false,
        message: err.message
    }))
}