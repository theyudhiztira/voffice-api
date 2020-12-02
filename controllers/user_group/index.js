const controller = require('./controller.js');

exports.showAll = async (req, res) => {
    let data = await controller.showAll();
    res.status(200).send(data)
};

exports.show    = async (req, res) => {
    let data = await controller.show(req.params.id)
    res.status(200).send(data)
};

exports.create  = async (req, res) => {
    // if(controller.create(req)){
    //     res.status(201).send({status: 'OK'})
    // }else{
    //     res.status(500).send({status: 'Error'})
    // }
    console.log(await controller.create(req));
};

exports.update  = (req, res) => controller.update(req, res);

exports.delete  = (req, res) => controller.delete(req, res);