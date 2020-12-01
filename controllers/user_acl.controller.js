const model = require('../models');
const hero = require('../lib/hero');


// Create and Save a new user acl. Params : User ID, Permissions (Object)
exports.create = (data) => {

    return model.users
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
            return err.message
        });
};

//Parse Array to String or String to Array. Params: Object. Return: Object
const parse = (data) => {

    Object.keys(data).forEach((key) => {
         data[key] =    (Array.isArray(data[key])) ? data[key].join(':') : 
                        (typeof data[key] === 'string' || data[key] instanceof String) ? JSON.stringify(data[key].split(':')) :
                        data[key] 
    })

    return data

}


