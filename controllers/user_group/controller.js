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

exports.create = (req) => {

    models.user_groups.create({
        name: req.body.name,
        created_by: req.userData.userId
    })
    .then(() => true)
    .catch(() => false)

}

exports.update = (req, res) => {
    let body = req.body;
    return models.user_groups.update({
            name: body.name,
            updated_by: req.userData.userId,
        }, {
            where: {
                id: req.params.id
            }
        }).then(result => res.status(201).send({
            status: true,
            data: result.dataValues
        })).catch(err => res.status(500).send({
            message: err.message
        }))
}

exports.delete = (req, res) => {
    return models.user_groups.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => res.status(201).send({
        status: true,
        message: "Data Deleted Successfully"
    })).catch(err => res.send(500).send({
        status: false,
        message: err.message
    }))
}