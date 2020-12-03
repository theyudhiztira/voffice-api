const controller = require('./controller');
const bcrypt = require("bcryptjs");

exports.create = async (req, res) => {
    let statusCode;
    const body = req.body;
    body.created_by = req.userData.userId;

    let func = await controller.create(body);

    console.log(func);

    // (!func.status) ? statusCode = 500 : statusCode = 200;

    // console.log (Object.keys(body).length)
    // return res.status(200).send(func);
};

exports.show = async (req, res) => {
    let users_id = req.params.users_id;
    let func = await controller.show(users_id);

    if (!func){
        func = {};
    }
    
    return res.status(200).send(func);
};