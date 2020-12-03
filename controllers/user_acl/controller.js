const model = require('../../models');
<<<<<<< HEAD:controllers/user_acl/controller.js
const hero = require('../../lib/hero');
=======
>>>>>>> dc94031ecf5c33e738ab70fb5c05cd220becb23a:controllers/user_acl.controller.js

/**
 * 
 * @param {object} data
 * @returns {void} 
 */
exports.create = async (data) => {

    await model.users
        .findOne({
            where: {
                id: data.user_id
            }
        })
        .then(findRes => {
            if (!findRes) {
                return 'Error: User ID Not Registered';
            }
            
            return model.user_acl.create(
                    parse(data)
                ).then(() => {
                    return true
                }).catch(err => {
                    throw err.message
                });;

        })
        .catch(err => {
            throw err.message
        });

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


