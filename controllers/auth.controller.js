const model = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");

const userAcl = require('./user_acl/controller');


exports.login = async (req, res) => {
    let body = req.body;

    const findUser = await model.users
            .findOne({
                where: {
                    email: body.email
                }
            });

    if (!findUser) {
        return res.status(401).send({
            message: 'Please check your credentials!'
        });
    }

    let data = findUser.dataValues;
    data.user_acl = await userAcl._getByUserID(data.id);


    bcrypt.compare(body.password, data.password, (error, result) => {
        if (error) {
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
                token: encodedToken,
                data: data
            });
        } else {
            return res.status(403).send({
                message: 'Auth Failed'
            });
        }
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
};