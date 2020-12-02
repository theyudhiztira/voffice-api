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
    (controller.create(req)) ? 
    res.status(201).send({status: true})
    : res.status(500).send({status: false})
};

exports.update  = async (req, res) => {
    (controller.update(req)) ? 
    res.status(200).send({status: true})
    : res.status(500).send({status: false})
};

exports.delete  = async (req, res) => {
    const id = req.params.id;
    (controller.delete(id)) ? 
    res.status(200).send({status: true})
    : res.status(500).send({status: false})
};