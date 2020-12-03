const model = require('../../models');

/**
 * 
 * @param {object} data
 * @returns {void} 
 */
exports.create = async (data) => {
    const findAcl = await model.users
    .findOne({
        where: {
            id: data.user_id
        }
    })

    if (!findAcl) {
        return {
            status: false,
            message: 'Error: User ID Not Registered'
        };
    }

    const createAcl = model.user_acl.create(parse(data));
    if(!createAcl){
        return {
            status: false,
            message: 'Failed to create user acl'
        }
    }

    return {
        status: true
    }
};

/**
 * 
 * @param {object} data raw data to parse, the value could be string or Array 
 * @returns {object} parsed data
 */
const parse = (data) => {

    Object.keys(data).forEach((key) => {
         data[key] =    (Array.isArray(data[key])) ? data[key].join(':') : 
                        (typeof data[key] === 'string' || data[key] instanceof String) ? JSON.stringify(data[key].split(':')) 
                        : data[key] 
    })

    return data;

}


