const model = require('../../models');
// const modelUserAcl = require('../models').users_acl;
const {
    Op
} = require('sequelize');
const bcrypt = require("bcryptjs");
const hero = require('../../lib/hero');
const userAcl = require('../user_acl/controller');


// Create and Save a new user
exports.create = async (params) => {
    // Create a User
    return await model.users
        .findOne({
            where: {
                [Op.or]: [{
                        email: params.email
                    },
                    {
                        phone: params.phone
                    }
                ]
            }
        })
        .then(findRes => {

            if (findRes) {
                return {
                    status: false,
                    message: "Your email or phone number is already in use!"
                };
            }

            model.users.create({
                first_name: params.first_name,
                last_name: params.last_name,
                email: params.email,
                password: bcrypt.hashSync(params.password, 10),
                current_base: params.current_base,
                user_group: params.user_group,
                phone: params.phone,
                dob: params.dob,
                status: params.status,
                additional_permission: params.additional_permission,
                created_by: params.created_by
            }).then((result) => {
                
                params.user_acl.user_id = result.dataValues.id;
                let createAcl = userAcl.create(params.user_acl);

                if (createAcl){
                    return {
                        status: true
                    };
                }
                else{
                    return {
                        status: false,
                        message: "Failed when create user ACL"
                    };
                }

            }).catch(err => {
                return {
                    status: false,
                    message: err.message
                };
            });
        })
        .catch(err => {
            return {
                status: false,
                message: err.message
            };
        });
};

// exports.get = async (params) => {

//     const user_id = parseInt(req.params.user_id);

//     return model.users
//         .findOne({
//             where: {
//                 id: user_id
//             }
//         })
//         .then((result) => {
//             return res.status(200).send(result);
//         }).catch(err => {
//             return res.status(500).send({
//                 message: err.message
//             })
//         })
// }

// exports.getAll = async (params) => {
    
//     return model.users
//         .findAll()
//         .then((result) => {
//             return res.status(200).send(result);
//         }).catch(err => {
//             return res.status(500).send({
//                 message: err.message
//             })
//         });
// }

// exports.update = async (params) => {

//     const id = req.params.user_id;
//     const params = req.params;

//     return model.users
//         .update(params, {
//             where: {
//                 id: id
//             }
//         }).then(result => {
//             return res.status(200).send({
//                 status: true
//             });
//         }).catch(err => {
//             res.status(500).send({
//                 message: err.message
//             })
//         })
// }

// exports.delete = async (params) => {

//     let id = req.params.user_id;
    
//     return model.users
//         .destroy({
//             where: {
//                 id: id
//             }
//         }).then(() => {
//             res.status(201).send({
//                 status: true
//             })
//         }).catch(err => {
//             res.send(500).send({
//                 message: err.message
//             })
//         })
// }