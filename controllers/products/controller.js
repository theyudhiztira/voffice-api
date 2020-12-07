const model = require('../../models');

exports._create = async (params) => {
    return await model.products
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

exports._getAll = async (filter) => {
    const data = await model.products.findAll();
    return data;
}

exports._get = async (id) => {
    if(!id){
        throw "Parameter (id) is required!";
    }

    const data = await model.products.findByPk(id);
    return data;
}

exports._update = async (params, id) => {
    return await model.products.update(params, {
            where: {
                id: id
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

exports._delete = async (id) => {
    return await model.products.destroy({
        where: {
            id: id
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