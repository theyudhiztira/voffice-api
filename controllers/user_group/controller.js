const models = require('../../models');

exports.showAll = async () => {
    const result = await models.user_groups.findAll();
    return result;
}

exports.show = async (paramsId) => {
    const result = await models.user_groups.findOne({
        where: {
            id: paramsId
        }
    })
    return result;
}

exports.create = async (req) => {
    return await models.user_groups.create({
        name: req.body.name,
        created_by: req.userData.userId
    })
    .then(() => true)
    .catch(() => false)

}

exports.update = async (req) => {
    return await models.user_groups.update({
            name: req.body.name,
            updated_by: req.userData.userId,
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(() => true)
        .catch(() => false)
}

exports.delete = async (id) => {
    return await models.user_groups.destroy({
        where: {
            id: id
        }
    })
    .then(() => true)
    .catch(() => false)
}