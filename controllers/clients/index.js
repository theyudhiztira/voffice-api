const model = require('../../models')
const controller = require('./controller');
const hero = require('../../lib/hero');

exports.create = async (req, res) => {
    let func = await controller._create(req.body);

    (func.status !== 200) ? statusCode = func.status : statusCode = 200;

    return res.status(statusCode).send(func)
};

exports.edit = async (req, res) => {
    let func = await controller._edit(req.body, req.params.client_id);

    (func.status !== 200) ? statusCode = func.status : statusCode = 200;

    return res.status(statusCode).send(func)
};