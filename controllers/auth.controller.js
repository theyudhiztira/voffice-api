const model = require('../models');
const {
    Op
} = require('sequelize');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");
const hero = require('../lib/hero');


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
                password: bcrypt.hashSync(hero.randomizer(8), 10),
                status: 1,
                created_by: req.userData.userId
            }).then(() => {
                return res.status(201).send({
                    status: true
                });
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

exports.login = (req, res) => {
    let body = req.body;

    model.users.findOne({
        where: {
            email: body.email
        }
    })
    .then(data => {
        if(!data){
            return res.status(401).send({
                message: 'Please check your credentials!'
            });
        }

        bcrypt.compare(body.password, data.password, (error, result) => {
            if (error) {
                console.log(error);
                return res.status(500).send({
                    message: error
                });
            }

            if (result) {
                let encodedToken = jwt.sign({
                    userId: data.id,
                    email: data.email
                }, process.env.JWT_KEY, {
                    expiresIn: "8h"
                });

                return res.status(200).send({
                    token: encodedToken
                });
            } else {
                return res.status(403).send({
                    message: 'Auth Failed'
                });
            }
        });
    })
    .catch(err => {
        console.log(err);
        return res.status(500).message({
            message: err
        });
    });
};

exports.verifyToken = (req, res) => {
    try {
        jwt.verify(req.headers.authorization.split(" ")[1], process.env.JWT_KEY);
        return res.status(200).send({
            status: true
        });
    } catch (error) {
        return res.status(403).send({
            status: false
        });
    }
}