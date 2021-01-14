const hero = require('../../lib/hero.js');
const controller = require('./controller.js');

exports.create = async (req, res) => {
    let statusCode;
    const body = req.body;
    body.created_by = req.userData.userId;
    let func = await controller.create(body);

    (!func.status) ? statusCode = 500 : statusCode = 200;
    
    return res.status(statusCode).send(func);
};

exports.showAll = async (req, res) => {
    const filter = hero.paramFilter(['city','province'], req.query);
    let func = await controller.showAll(filter);
    
    return res.status(200).send(func);
};

exports.show = async (req, res) => {
    let location_id = parseInt(req.params.location_id);
    let func = await controller.show(location_id);

    (!func) ? func = {} : func = func;
    
    return res.status(200).send(func);
};

exports.update = async (req, res) => {
    let statusCode;
    let location_id = parseInt(req.params.location_id);
    let body = req.body;
    body.updated_by = req.userData.userId;
    let func = await controller.update(body, location_id);

    (!func.status) ? statusCode = 500 : statusCode = 200;
    
    return res.status(statusCode).send(func);
};

exports.delete = async (req, res) => {
    let statusCode;
    let location_id = parseInt(req.params.location_id);
    let func = await controller.delete(location_id);

    (!func.status) ? statusCode = 500 : statusCode = 200;
    
    return res.status(statusCode).send(func);
};