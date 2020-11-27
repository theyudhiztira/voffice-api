const model = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");


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