const model = require('../../models')
const controller = require('./controller');
const hero = require('../../lib/hero');

exports.getAll = async (req, res) => {
    hero.paramFilter()
    const result = await controller._getAll();

    return res.status(200).send(result)
}