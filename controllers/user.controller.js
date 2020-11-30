const model = require('../models');
const {
    Op
} = require('sequelize');
const bcrypt = require("bcryptjs");
const hero = require('../lib/hero');
const userAcl = require('../controllers/user_acl.controller');


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
                created_by: 24
                // created_by: req.userData.userId
            }).then((userId) => {
                userAcl.create(userId, body.user_acl)
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