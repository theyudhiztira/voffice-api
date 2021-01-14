const controller = require('./controller');
const bcrypt = require("bcryptjs");

exports.create = async (req, res) => {
    let statusCode;
    const body = req.body;
    body.created_by = req.userData.userId;
    
    return res.status(200).send(await controller.create(body))
};

exports.showAll = async (req, res) => {
    let func = await controller.showAll();
    
    return res.status(200).send(func);
};

exports.show = async (req, res) => {
    let user_id = parseInt(req.params.user_id);
    let func = await controller.show(user_id);

    (!func) ? func = {} : func = func;
    
    return res.status(200).send(func);
};

exports.update = async (req, res) => {
    let statusCode;
    let user_id = parseInt(req.params.user_id);
    let body = req.body;
    let func = await controller.update(body, user_id);

    (!func.status) ? statusCode = 500 : statusCode = 200;
    
    return res.status(statusCode).send(func);
};

exports.delete = async (req, res) => {
    let statusCode;
    let user_id = parseInt(req.params.user_id);
    let func = await controller.delete(user_id);

    (!func.status) ? statusCode = 500 : statusCode = 200;
    
    return res.status(statusCode).send(func);
};