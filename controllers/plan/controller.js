const model = require("../../models");
const {Op} = require("sequelize");
const moment = require("moment");
const products = require("../../models/products");
const plans = require("../../models/plans");

exports._create = async (params) => {
  
  const processData = params.map(async v => {
    const product = await model.products.findOne({ where: { id: v.product_id }})

    v.next_renew_date = moment(v.start_date).add(v.contract_term, 'M').tz('Asia/Jakarta').format("YYYY-MM-D"),
    v.current_price = product.price,
    v.status = 0,
    v.created_at = moment().tz('Asia/Jakarta').format("YYYY-MM-DD HH:mm:ss"),
    v.updated_at = moment().tz('Asia/Jakarta').format("YYYY-MM-DD HH:mm:ss")

    return await model.plans.create(v)
    .then(async (result) => {

      return model.plan_dt.create({
        plan_id: result.id,
        free_credit: product.credit,
        paid_credit: 0,
        updated_by: result.created_by,
        created_at:  moment().tz('Asia/Jakarta').format("YYYY-MM-D HH:mm:ss"),
        updated_at:  moment().tz('Asia/Jakarta').format("YYYY-MM-D HH:mm:ss")
      })

    })
    .then((result) => {
      return true
    })
    .catch((err) => {
      return false
    })
  })

  return {
    status: 200,
    message: "Successfully Create Plan."  
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
