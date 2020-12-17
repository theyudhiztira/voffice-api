const hero = require('../../lib/hero.js');
const controller = require('./controller.js');
const model = require('../../../models/partnership')

exports.getRevenueData = async (req, res) => {
    let location_id = parseInt(req.params.location_id);
    
    const findInvoice = await model.invoices
    .findOne({
        where: {
            location_id: location_id
        }
    });
    
    return res.status(200).send(findInvoice);
};