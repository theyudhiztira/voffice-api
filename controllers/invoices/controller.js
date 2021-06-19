const model = require("../../models");
const moment = require("moment");
const axios = require('axios')
const promoController = require("../promo/controller")


exports._generateInvoice = async (params) => {
  try {
    
    const dataInvoices = await axios({
      method: "GET",
      url: process.env.INVOICE_URL + `invoices?id=${params.invoice_id}`,
    })

    const invoiceDts = dataInvoices.data.result.rows[0].invoice_dts
    const planId = invoiceDts.map(el => el.company_plan_id)
    const promo = await (await promoController._get({id: params.promo_id})).result[0];
    const calculatePrice = await local.calculatePrice(promo, planId, params.pph_42, params.pph_23, dataInvoices.data.result.rows[0].vat)

    const doUpdatePlan = await model.plans.update({ contract_term: params.contract_term}, { 
      where: { 
        id: planId
      }
    })

    delete params.contract_term

    params.amount_due = calculatePrice.amountDue
    params.pph_42 = params.pph_42 ? 'y' : 'n'
    params.pph_23 = params.pph_23 ? 'y' : 'n'
    params.toUpdateDt = calculatePrice.toUpdateDt

    const doUpdateInvoice = await axios({
      method: "PUT",
      url: process.env.INVOICE_URL + 'invoices',
      data: params
    })

    return {
      status: 200, 
      result: doUpdateInvoice.data.result,
    };
  } catch (err) {
    return {
      status: 500,
      result: err.message,
    };
  }
}

const local = exports = {
  calculatePrice: async (promo, planId, pph_42, pph_23) => {
    
    let plan = await model.plans.findAll({
      where: {
        id: planId
      },
      include: {
        model: model.products
      }
    })

    let toUpdateDt = []
    let amountDue = 0
    let vat       = 0
    let pph23     = 0
    let pph42     = 0
    await Promise.all(plan.map(async (v) => {

      if (v.product.category == 3){

        if(promo){
          if(promo.type == 2){
            v.product.price = v.product.price - ((v.product.price * promo.price) / 100)
          }else{
            v.product.price = v.product.price - promo.price
          }
        }

        //vat
        vat = v.product.price * 0.1

        //pph23
        if (pph_23){
          pph23 = (v.product.price * 0.02)
        }
        
      }else{

        if(promo && v.product.category !== 5){
          if(promo.type == 2){
            v.product.price = v.product.price - ((v.product.price * promo.price) / 100)
          }else{
            v.product.price = v.product.price - promo.price
          }
        }

        //vat
        vat = v.product.price * 0.1

        //pph42
        if (pph_42){
          pph42 = (v.product.price * 0.1)
        }
      }

      amountDue += v.product.price

      toUpdateDt.push({
        plan_id: v.id,
        pph_23: pph23,
        pph_42: pph42,
        vat: vat,
      })
    }));
    
    amountDue = amountDue + (amountDue * 0.1) - pph42 - pph23

    return {
      amountDue: amountDue,
      toUpdateDt: toUpdateDt
    }
  }
}