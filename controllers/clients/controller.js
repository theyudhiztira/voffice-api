const model = require('../../models');
const {
    Op
} = require('sequelize');
const controller = require('./controller');
const hero = require('../../lib/hero');

exports._create = (params) => {
    return new Promise(async (resolve, reject) => {
        const client = model.client
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

        if(client){
            return reject({
                status: 400,
                message: client.email === params.email ? `Client email is already in use (${client.id})` : `Client phone is already in use (${client.id})` 
            })
        }

        const car = params;

        const prop = ['business_needs', ]

        const newCar = Object.keys(car).reduce((object, key) => {
            if (key !== prop) {
                object[key] = car[key]
            }
            return object
        }, {})

        model.client.create(params);
    });
}