const model = require("../../models");
const {Op} = require("sequelize");
const moment = require("moment");
const products = require("../../models/products");
const plans = require("../../models/plans");
const { createInvoice } = require("../invoices")
const axios = require('axios')

exports._create = async (params) => {

  try {

    let dataForDt = []
    await Promise.all(params.map(async (v) => {
      const product = await model.products.findOne({ where: { id: v.product_id }})

      v.current_price = product.price,
      v.status = 0,
      v.created_at = moment().tz('Asia/Jakarta').format("YYYY-MM-DD HH:mm:ss"),
      v.updated_at = moment().tz('Asia/Jakarta').format("YYYY-MM-DD HH:mm:ss")
      v.created_by = params.user

      let plan = await model.plans.create(v)

      let plan_dt = await model.plan_dt.create({
        plan_id: plan.id,
        free_credit: product.credit,
        paid_credit: 0,
        updated_by: plan.created_by,
        created_at:  moment().tz('Asia/Jakarta').format("YYYY-MM-D HH:mm:ss"),
        updated_at:  moment().tz('Asia/Jakarta').format("YYYY-MM-D HH:mm:ss")
      })

      dataForDt.push({
        plan_id: plan.id,
        product_id: product.id,
        product_name: product.product_name,
        price: product.price,
      });
    }));


    const invoice = await createInvoice({
      company_id: params[0].company_id,
      amount_due: 0,
      created_by: params.user,
      dataForDt: dataForDt
    })

    return {
      status: 200,
      result: "Successfully Create Plan."
    }
    
  } catch (err) {
    
    return {
      status: 500,
      result: err.message
    }
  }
};

exports._get = async (filter) => {

  try {

    const plans = await model.plans.findAll({
      where: filter,
      include: [
        {
          model: model.locations,
        },
        {
          model: model.products,
        },
        {
          model: model.plan_dt
        },
        {
          model: model.companies
        }
      ]
    });

    if(!plans)  return {
      status: 400,
      result: `Plans doesn't exists!`,
    };

    return {
      status: 200, 
      result: plans,
    };

  } catch (err) {
    return {
      status: 500,
      result: err.message,
    };

  }
};

