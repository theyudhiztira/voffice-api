const model = require("../../models");
const axios = require('axios')
const controller = require("./controller");

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

exports.generateInvoice = async (req, res) => {
    let func = await controller._generateInvoice(req.body);
  
    func.status !== 200 ? (statusCode = func.status) : (statusCode = 200);
  
    return res.status(statusCode).send(func);
};