const model = require('../models');
const hero = require('../lib/hero');


// Create and Save a new user acl. Params : User ID, Permissions (Object)
exports.create = (user_id, data) => {

    return model.users
        .findOne({
            where: {
                user_id: user_id
            }
        })
        .then(findRes => {
            if (findRes) {
                throw 'Error: User ID Already Exist';
            }

            const parsedData = parse(data)

            model.users_acl.create({
                user_id: user_id,
                parsedData

            }).then(() => {

                return true

            }).catch(err => {
                
                throw err.message

            });

        })
        .catch(err => {
            throw err.message
        });
};

//Parse Array to String or String to Array. Params: Object. Return: Object
const parse = (data) => {

    Object.keys(data).forEach((key) => {
         data[key] = (Array.isArray(data[key])) ? data[key].join(':') : (typeof data[key] == 'string') ? data[key].split(':') : data[key] 
    })

    return data

}



