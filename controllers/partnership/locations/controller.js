const model = require('../../../models/partnership')

exports._get = async (id) => {

    if(!id){
        throw "Parameter (id) is required!";
    }
    
    const findLocation = await model.locations
    .findOne({
        where: {
            id: id
        }
    });

    const data = findLocation;
    
    return data;
}