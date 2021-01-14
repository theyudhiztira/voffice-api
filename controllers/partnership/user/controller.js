const model = require('../../../models/partnership')

/**
 * 
 * @param {number} id user Id
 * @returns {object} Model users ( find by primary key method )
 */
exports.get = async (id) => {
    return await model.users.findByPk(id);
}