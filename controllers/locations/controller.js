const model = require('../../models');
const {
    Op
} = require('sequelize');

exports.create = async (params) => {

    return await model.locations
        .create(params)
        .then((result) => {
            return {
                status: true,
            };
        }).catch(err => {
            return {
                status: false,
                message: err.message
            }
        });
};

exports.showAll = async () => {
    const data = await model.locations.findAll();
    return data;
};

exports.show = async (location_id) => {
    const data = await model.locations.findOne({
        where: {
            id: location_id
        }
    });
    console.log(data);
    return data;
};

exports.update = async (params, location_id) => {

    return await model.locations.update(params, {
            where: {
                id: location_id
            }
        }).then(result => {
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

exports.delete = (location_id) => {

    return model.locations.destroy({
        where: {
            id: location_id
        }
    }).then(result => {
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