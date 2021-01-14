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


// Example of currect usage of sequelize
// Sequelize is an ORM or Object Relational Mapping 
// It means is the samething like laravel's eloquent
// So please have a look on my code so you guy will understand how to use it 
exports._update = async (params, id) => {
    const product = await model.products.findByPk(id);
    if(!product){
        return {
            status: false,
            message: 'Data is not exists!'
        }
    }

    try{
        await product.update(params);
    }catch(err){
        return {
            status: false,
            message: err.message
        }
    }

    return {
        status: true
    }
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