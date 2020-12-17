const model = require('../../models/partnership')
const Op = require('sequelize')
const moment = require('moment')

exports.get = async (req, res) => {
    const location_id = parseInt(req.params.location_id);
    
    const findInvoice = await model.invoices_ht.findAll({
        where: {
            location_id: location_id,
            status: 1,
            created_at: Op.where(Op.literal('invoices_ht.created_at '), '>', moment('2020-10-31').toDate()),
            [Op.where]: Op.literal('product_category IN (1,5,3)')
        },
        attributes: [
            'id',
            'currency',
            'amount_due',
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
        limit: 1000,
        offset: 0,
        subQuery: false
    });

    return res.status(200).send(findInvoice);
};