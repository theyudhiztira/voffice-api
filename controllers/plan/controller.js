const model = require("../../models");
const {Op} = require("sequelize");
const moment = require("moment");
const products = require("../../models/products");
const plans = require("../../models/plans");
const { createInvoice } = require("../invoices")

exports._create = async (params) => {

  try {
    const processData = params.map(async v => {
      const product = await model.products.findOne({ where: { id: v.product_id }})
  
      // v.next_renew_date = moment(v.start_date).add(v.contract_term, 'M').tz('Asia/Jakarta').format("YYYY-MM-D"),
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
    })
    
    return {
      status: 200,
      message: "Successfully Create Plan."  
    }
    
  } catch (err) {
    
    return {
      status: 500,
      message: err.message
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
        }
      ]
    });

    if(!plans)  return {
      status: 400,
      message: `Plans doesn't exists!`,
    };

    return {
      status: 200, 
      message: plans,
    };

  } catch (err) {
    return {
      status: 500,
      message: err.message,
    };

  }
};