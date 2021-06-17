const model = require("../../models");
const moment = require("moment");
const axios = require('axios')


exports._generateInvoice = async (params) => {
  try {
    // params = { date_due: "11 Jun 2021", promo: 1, pph_42: true, invoiceId: 1

    const dataInvoices = await axios({
      method: "GET",
      url: process.env.INVOICE_URL + `invoices?id=${params.invoiceId}`,
    })

    const invoiceDts = dataInvoices.data.result.rows[0].invoice_dts

    let planId = invoiceDts.map(el => el.company_plan_id)

    const doUpdatePlan = await model.plans.update({ contract_term: params.contract_term}, { 
        where: { 
            id: planId
        }
    })

   delete params.contract_term

   const doUpdateInvoice = axios({
     method: "PUT",
     url: process.env.INVOICE_URL + 'invoices',
     data: params
   })

    return {
      status: 200, 
      result: doUpdateInvoice,
    };
  } catch (err) {
    return {
      status: 500,
      result: err.message,
    };
  }
}