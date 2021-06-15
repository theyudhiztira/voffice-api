const model = require("../../models");
const axios = require('axios')

exports.createInvoice = async (payload) => {

    try {

        const newInvoice = await axios({
            method: "POST",
            url: process.env.INVOICE_URL + 'invoices',
            data: payload
        })

        return true
    } catch (err) {
        console.log(err.message);
        return false
    }
}