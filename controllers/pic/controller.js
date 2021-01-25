const model = require('../../models');
const {
    Op
} = require('sequelize');
const controller = require('./controller');
const hero = require('../../lib/hero');
const moment = require('moment')

exports._create = async (params) => {
    const pic = await model.pic
        .findOne({
            where: {
                [Op.or]: [
                    {
                        email: params.email
                    },
                    {
                        phone: params.phone
                    }
                ]
            }
        });

    if (pic){
        return {
            status: 400,
            message: pic.email === params.email ? `Pic email is already in use (${pic.id})` : `Pic phone is already in use (${pic.id})`
        }
    }

    const business_needs = params.business_needs;
    params.status = 0;
    params.created_at = moment().format('Y-m-d');
    params.updated_at = moment().format('Y-m-d');
    delete params.business_needs;
    
    return await model.pic
        .create(params)
        .then((resultPic) => {

            let business_needs_arr = [];
            for (let i = 0; i < business_needs.length; i++) {
                business_needs_arr.push({
                    pic_id: resultPic.dataValues.id,
                    product_category_id: business_needs[i],
                })
            }

            return model.pic_business_needs
                .bulkCreate(business_needs_arr)
                .then(() => {

                    return {
                        status: 200,
                        message: 'Successfully Create Pic.'
                    };
                    
                }).catch(err => {
                    return {
                        status: 200,
                        message: err.message
                    }
                });
                
        }).catch(err => {
            return {
                status: 500,
                message: err.message
            }
        });
}

exports._get = async (filter) => {
    const pic = await model.pic
        .findAll({
            where: filter,
            include: {
                model: model.pic_business_needs
            }
        });

    if (!pic){
        return {
            status: 400,
            message: `Pic doesn't exists!`
        }
    }
    
    return {
        status: 200,
        message: pic
    }
}

exports._edit = async (params, pic_id) => {
    const pic = await model.pic
        .findOne({
            where: {
                id: pic_id
            }
        });

    if (!pic){
        return {
            status: 400,
            message: `Pic with ID (${pic_id}) not found!`
        }
    }
    
    return await model.pic
        .update(params, {
            where: {
                id: pic_id
            }
        })
        .then((resultPic) => {
            return {
                status: 200,
                message: 'Successfully Update Pic.'
            };
        }).catch(err => {
            return {
                status: 500,
                message: err.message
            }
        });
}