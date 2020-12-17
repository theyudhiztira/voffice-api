const model = require('../../models/partnership')
const Op = require('sequelize')
const moment = require('moment')

exports.get = async (req, res) => {
    let location_id = parseInt(req.params.location_id);
    
    const findInvoice = await model.invoices_ht
    .findAll({
        where: {
            location_id: location_id,
            status: 1,
            created_at: Op.where(Op.literal('invoices_ht.created_at '), '>', moment('2020-10-31').toDate()),
        },
        include: [{
            model: model.invoices_dt,
            include: [{
                model: model.products,
                attributes: ['product_category']
            }]
        }],
        order: [
            ['created_at', 'DESC']
        ]
    });

    let vo = [];
    let membership = [];
    let so = [];
    findInvoice.map(v => {
        let data = v.dataValues;

        data.invoices_dts.map(vdt => {
            if (vdt.product){
                if (vdt.product.product_category == 5){
                    vo.push({
                        invoice_id: data.id,
                        currency: data.currency,
                        amount_due: data.amount_due,
                        product_name: vdt.product_name,
                        recurring: data.recurring,
                        date_paid: data.date_paid
                    })
                }else if(vdt.product.product_category == 3){
                    membership.push({
                        invoice_id: data.id,
                        currency: data.currency,
                        amount_due: data.amount_due,
                        product_name: vdt.product_name,
                        recurring: data.recurring,
                        date_paid: data.date_paid
                    })
                }else if(vdt.product.product_category == 1){
                    so.push({
                        invoice_id: data.id,
                        currency: data.currency,
                        amount_due: data.amount_due,
                        product_name: vdt.product_name,
                        recurring: data.recurring,
                        date_paid: data.date_paid
                    })
                }
            }
        })

    });

    let result = {
        totalDataVO: vo.length,
        totalDataMembership: membership.length,
        totalDataSO: so.length,
        totalData: so.length + vo.length + membership.length,
        data: {
            vo: vo,
            membership: membership,
            so: so
        }
    };

    return res.status(200).send(result);
};