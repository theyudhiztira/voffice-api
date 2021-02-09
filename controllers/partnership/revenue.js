const model = require('../../models/partnership')
const Sequelize = require('sequelize')
const moment = require('moment')
const hero = require('../../lib/hero');

exports.get = async (req, res) => {
    const location_id = parseInt(req.params.location_id);
    const filter = hero.paramFilter(['year','yearAndMonth'], req.query);
    let from;
    let to;

    if (filter.year){
        const year = filter.year;
        from = moment(year).startOf('years').format("YYYY-MM-DD");
        to = moment(year).endOf('years').format("YYYY-MM-DD");

        if(year === '2020'){
            from = moment(year+'-10-01').format("YYYY-MM-DD");
            to = moment('2020').endOf('years').format("YYYY-MM-DD");
        }
        
    }else if (filter.yearAndMonth){
        from = moment(filter.yearAndMonth).startOf('month').format("YYYY-MM-DD")
        to = moment(filter.yearAndMonth).endOf('month').format("YYYY-MM-DD")
    }else{
        from = moment('2020-10-01').format("YYYY-MM-DD")
        to = moment(moment().format('Y')).endOf('years').format("YYYY-MM-DD")
    }

    const data = await model.invoices_ht.findAndCountAll({
        where: {
            location_id: location_id,
            status: 1,
            date_paid: {
                [Sequelize.Op.between] : [from, to]
            },
            [Sequelize.where]: Sequelize.literal('product_category IN (1,5,3)')
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