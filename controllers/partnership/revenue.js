const model = require('../../models/partnership')
const Op = require('sequelize')
const moment = require('moment')
const hero = require('../../lib/hero');

exports.get = async (req, res) => {
    const location_id = parseInt(req.params.location_id);

    const data = await model.invoices_ht.findAndCountAll({
        where: {
            location_id: location_id,
            status: 1,
            date_paid: Op.where(Op.literal('invoices_ht.date_paid '), '>=', moment('2021-01-01').toDate()),
            [Op.where]: Op.literal('product_category IN (1,5,3)')
        },
        attributes: [
            'id',
            'currency',
            'amount_paid',
            'date_paid',
            'recurring',
        ],
        include: [{
            model: model.invoices_dt,
            attributes: ['product_name'],
            include: [{
                required: false, 
                model: model.products,
                attributes: ['product_category']
            }]
        }],
        order: [
            ['created_at', 'DESC']
        ],
        subQuery: false
    });

    return res.status(200).send(data);
};