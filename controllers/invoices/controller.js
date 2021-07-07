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

    console.log(planId);
    const doUpdatePlan = await model.plans.update({ contract_term: params.contract_term}, { 
      where: { 
        id: planId
      }
    })

    delete params.contract_term

    params.amount_due = calculatePrice.amountDue
    params.discount = promo ? promo.price : 0
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

exports._getInvoice = async (params) => {
  try {
    const invoice = await axios({
      method: "GET",
      url: process.env.INVOICE_URL + `invoices?id=${params.id}`,
    })

    if(!invoice) {
      return {
        status: 400,
        message: `Invoice doesn't exists!`,
      };
    }

    return {
      status: 200, 
      result: invoice.data.result,
    };
  } catch (err) {
    return {
      status: 500,
      result: err.message,
    };
  }
}

exports._showActivation = async (params) => {
  try {
    const invoice = await axios({
      method: "GET",
      url: process.env.INVOICE_URL + `invoices?status=1`,
    })

    const plans = await model.plans.findAll({
      where: {
        status: 2
      },
      include: [
        {
          model: model.companies,
          include: {
            model: model.pic,
            attributes: ["full_name"]
          },
          attributes: ["company_name"]
        }
      ],
      attributes: ["company_id", "id"],
    })

    if(!invoice) {
      return {
        status: 400,
        message: `Invoice doesn't exists!`,
      };
    }

    for(let i = 0; i < invoice.data.result.rows.length; i++) {
        const dts = invoice.data.result.rows[i].invoice_dts

        let result = dts.map(el => {
          let temp = plans.find(v => el.company_plan_id === v.id)
          if(temp) return temp
        })

        if(result) {
          invoice.data.result.rows[i].plans = result
        }
    }


    return {
      status: 200, 
      result: invoice.data.result.rows,
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
    let total_pph42 = 0
    let total_pph23 = 0

    await Promise.all(plan.map(async (v) => {
      const realPrice = v.product.price
      let pph23     = 0
      let pph42     = 0
      let vat       = 0

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
          total_pph23 = pph23
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
          total_pph42 = pph42
        }
      }

      amountDue += v.product.price

      toUpdateDt.push({
        plan_id: v.id,
        price: realPrice,
        pph_42: pph42,
        pph_23: pph23,
        vat: vat,
      })
    }));

    amountDue = amountDue + (amountDue * 0.1) - total_pph42 - total_pph23
    

    return {
      amountDue: amountDue,
      toUpdateDt: toUpdateDt
    }
  }
}