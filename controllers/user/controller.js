const model = require('../../models');
// const modelUserAcl = require('../models').users_acl;
const {
    Op
} = require('sequelize');
const bcrypt = require("bcryptjs");
const hero = require('../../lib/hero');
const userAcl = require('../user_acl/controller');


// Create and Save a new user
exports.create = (req, res) => {
    // Create a User
    let body = req.body;

    return model.users
        .findOne({
            where: {
                [Op.or]: [{
                        email: body.email
                    },
                    {
                        phone: body.phone
                    }
                ]
            }
        })
        .then(findRes => {
            if (findRes) {
                return res.status(401).json({
                    message: "Your email or phone number is already in use!"
                });
            }

            model.users.create({
                first_name: body.first_name,
                last_name: body.last_name,
                current_base: body.current_base,
                dob: body.dob,
                email: body.email,
                phone: body.phone,
                password: bcrypt.hashSync(body.password, 10),
                status: 1,
                created_by: 24
                // created_by: req.userData.userId
            }).then((result) => {
                body.user_acl.user_id = result.dataValues.id;
                let createAcl = userAcl.create(body.user_acl);

                if (createAcl){
                    return res.status(201).send({
                        status: true
                    });
                }
                else{
                    return res.status(500).send({
                        message: "Failed when create user ACL"
                    })
                }

            }).catch(err => {
                return res.status(500).send({
                    message: err.message
                })
            });
        })
        .catch(err => {
            return res.status(500).send({
                message: err.message
            })
        });
};

exports.get = (req, res) => {

    const user_id = parseInt(req.params.user_id);

    return model.users
        .findOne({
            where: {
                id: user_id
            }
        })
        .then((result) => {
            return res.status(200).send(result);
        }).catch(err => {
            return res.status(500).send({
                message: err.message
            })
        })
}

exports.getAll = (req, res) => {
    
    return model.users
        .findAll()
        .then((result) => {
            return res.status(200).send(result);
        }).catch(err => {
            return res.status(500).send({
                message: err.message
            })
        });
}

exports.update = (req, res) => {

    const id = req.params.user_id;
    const body = req.body;

    return model.users
        .update(body, {
            where: {
                id: id
            }
        }).then(result => {
            return res.status(200).send({
                status: true
            });
        }).catch(err => {
            res.status(500).send({
                message: err.message
            })
        })
}

exports.delete = (req, res) => {

    let id = req.params.user_id;
    
    return model.users
        .destroy({
            where: {
                id: id
            }
        }).then(() => {
            res.status(201).send({
                status: true
            })
        }).catch(err => {
            res.send(500).send({
                message: err.message
            })
        })
}