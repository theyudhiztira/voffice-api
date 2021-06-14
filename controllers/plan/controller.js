const model = require("../../models");
const {Op} = require("sequelize");
const moment = require("moment");
const products = require("../../models/products");
const plans = require("../../models/plans");
const { createInvoice } = require("../partnership/invoices/index")

exports._create = async (params) => {

  try {
    const processData = params.plan.map(async v => {
      const product = await model.products.findOne({ where: { id: v.product_id }})
  
      v.next_renew_date = moment(v.start_date).add(v.contract_term, 'M').tz('Asia/Jakarta').format("YYYY-MM-D"),
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
        
        // date due & show period statis
        const dataInvoice = {
          invoice: {
            company_id: v.company_id,
            amount_due: params.invoice.amount_due,
            date_generated: moment().tz('Asia/Jakarta').format("YYYY-MM-D HH:mm:ss"),
            date_due: "2021-02-18",
            period_from: plan.start_date,
            period_to: plan.next_renew_date,
            show_period: 0,
          },
          invoice_dt: {
            company_plan_id: plan.id,
            product_id: plan.product_id,
            quantity: 1
          },
          userData: plan.created_by
        }

        const invoice = await createInvoice(dataInvoice)
    })

    return {
      status: 200,
      message: "Successfully Create Plan."  
    }
    
  } catch (err) {
    console.log(err.message);
    return {
      status: 200,
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

// exports._search = async (filter) => {
//   const search = filter;

//   console.log(search);

//   const pic = await model.pic.findAll({
//     where: {
//       [Op.or]: [
//         {full_name: {[Op.like]: "%" + search.full_name + "%"}},
//         {id: {[Op.like]: "%" + search.id + "%"}},
//       ],
//     },
//     include: { model: model.companies }
//   });

//   if (!pic) {
//     return {
//       status: 400,
//       message: `PIC doesn't exists!`,
//     };
//   }

//   return {
//     status: 200,
//     message: pic,
//   };
// };

// exports._edit = async (params, pic_id) => {
//   const pic = await model.pic.findOne({
//     where: {
//       id: pic_id,
//     },
//   });

//   if (!pic) {
//     return {
//       status: 400,
//       message: `Client with ID (${pic_id}) not found!`,
//     };
//   }

//   return await model.pic
//     .update(params, {
//       where: {
//         id: pic_id,
//       },
//     })
//     .then((resultClient) => {
//       return {
//         status: 200,
//         message: "Successfully Update Client.",
//       };
//     })
//     .catch((err) => {
//       return {
//         status: 500,
//         message: err.message,
//       };
//     });
// };
