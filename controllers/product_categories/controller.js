const model = require('../../models');

exports._create = async (params) => {
    return await model.product_categories
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
    const data = await model.product_categories.findAll();
    return data;
}

exports._get = async (id) => {
    if(!id){
        throw "Parameter (id) is required!";
    }

    const data = await model.product_categories.findByPk(id);
    return data;
}

exports._update = async (params, id) => {
    return await model.product_categories.update(params, {
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
    return await model.product_categories.destroy({
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