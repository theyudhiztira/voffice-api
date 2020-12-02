const model = require('../../models');

exports._getAll = async (filter) => {
    const data = await model.products.findAll();
    return data;
}

exports._get = async (id) => {
    if(!id){
        throw "Parameter (id) is required!";
    }

    const data = await model.products.findByPk();
    return data;
}  