const model = require('../../models');
const {
    Op
} = require('sequelize');
const bcrypt = require("bcryptjs");
const hero = require('../../lib/hero');
const userAcl = require('../user_acl/controller');

exports.create = async (params) => {
    const findUser = await model.users
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
        });

    if (findUser) {
        return {
            status: false,
            message: "Your email or phone number is already in use!"
        };
    }

    params.password = bcrypt.hashSync(params.password, 10);
    const createUser = await model.users.create(params)

    params.user_acl.user_id = createUser.dataValues.id;
    params.user_acl.created_by = params.created_by;
    let createAcl = await userAcl.create(params.user_acl);

    if (createAcl.status){
        return {
            status: true
        };
    }else{
        return {
            status: false,
            message: createAcl.message
        };
    }
}

exports.showAll = async () => {
    return await model.users.findAll();
}

exports.show = async (user_id) => {
    return await model.users
        .findOne({
            where: {
                id: user_id
            }
        });
}

exports.update = async (params, user_id) => {
    return await model.users.update(params, {
            where: {
                id: user_id
            }
        }).then(() => {
            return {
                status: true,
            };
        }).catch(err => {
            return {
                status: false,
                message: err.message
            }
        })
}

exports.delete = async (location_id) => {
    return model.users.destroy({
        where: {
            id: location_id
        }
    }).then(() => {
        return {
            status: true,
        };
    }).catch(err => {
        return {
            status: false,
            message: err.message
        }
    })
}