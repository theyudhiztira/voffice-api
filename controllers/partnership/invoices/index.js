const model = require('../../../models')
const axios = require('axios')

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

exports.createInvoice = async (payload) => {
    try {
        let dataInvoice = { ...payload }
        
        const product = await model.products.findOne({ where: { id: dataInvoice.invoice_dt.product_id }})
 
        dataInvoice.invoice_dt.product_name = product.product_name
        dataInvoice.invoice_dt.price = product.price

        const newInvoice = await axios({
            method: "POST",
            url: process.env.INVOICE_URL + 'invoices',
            data: dataInvoice
        })
       
        return true
    } catch (err) {
        console.log(err.message);
        return false
    }
}