const axios = require('axios')

exports.createInvoice = async (payload) => {
    try {
        let dataInvoice = { ...payload }
        
        const product = await model.products.findOne({ where: { id: dataInvoice.invoice_dt.product_id }})
 
        dataInvoice.invoice_dt.product_name = product.name
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