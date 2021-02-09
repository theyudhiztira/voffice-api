const model = require('../../../models/partnership')

exports.show = async (req, res) => {
    return await model.clients.findAll()
    .then(result => {
        return res.status(200).send(result)
    })
    .catch(err => {
        return res.status(500).send({
            err: err.message
        })
    })
}