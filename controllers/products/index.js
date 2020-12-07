const model = require('../../models')
const controller = require('./controller');
const hero = require('../../lib/hero');

exports.create = async (req, res) => {
    let statusCode;
    const body = req.body;
    body.created_by = req.userData.userId;
    let func = await controller._create(body);

    (!func.status) ? statusCode = 500 : statusCode = 200;
    
    return res.status(statusCode).send(func);
}

exports.getAll = async (req, res) => {
    const func = await controller._getAll();
    return res.status(200).send(func)
}

exports.get = async (req, res) => {
    const id = parseInt(req.params.product_id);
    let func = await controller._get(id);

    (!func) ? func = {} : func = func;

    return res.status(200).send(func)
}

exports.update = async (req, res) => {
    let statusCode;
    const id = parseInt(req.params.product_id);
    const body = req.body;
    const func = await controller._update(body, id);

    (!func.status) ? statusCode = 500 : statusCode = 200;
    
    return res.status(statusCode).send(func);
}

exports.delete = async (req, res) => {
    let statusCode;
    const id = parseInt(req.params.product_id);
    const func = await controller._delete(id);

    (!func.status) ? statusCode = 500 : statusCode = 200;
    
    return res.status(statusCode).send(func);
};