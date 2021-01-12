const model = require('../../models')
const controller = require('./controller');
const hero = require('../../lib/hero');

exports.create = (req, res) => {
    controller._create(req.body);
    return res.status(200).send({
        meki: "meki irma wati"
    })
};