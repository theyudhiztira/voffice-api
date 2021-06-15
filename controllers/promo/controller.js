const model = require("../../models");
const {Op} = require("sequelize");
const moment = require("moment");
const path = require('path');

// exports._create = async (params) => {

//   params.body.created_at = moment().tz('Asia/Jakarta').format("YYYY-MM-D HH:mm:ss")
//   params.body.updated_at = moment().tz('Asia/Jakarta').format("YYYY-MM-D HH:mm:ss")

//   return await model.facilities.create(params.body)
//   .then(async (facility) => {
//     const fileData = params.files.images

//       let filename = `${facility.id}-images.${(fileData.mimetype).split('/').pop()}`;
//       const rootFolder = path.dirname(require.main.filename);

//       await fileData.mv(`${rootFolder}/storage/facilities/${filename}`, (err) => {
//         console.log(err ? err : "File saved")
//       });
        

//       await model.facilities.update({ images: filename }, 
//         {
//             where: {
//                 id: facility.id
//             }
//         }) 

//         return {
//           status: 200,
//           message: "Successfully Create Facility."
//         }
//     })
//     .catch((err) => {
//       return {
//         status: 500,
//         message: err.message,
//       }
//     })
// };  

exports._get = async (filter) => {
  promo = await model.promo.findAll({
    where: filter
  });

  if (!promo) {
    return {
      status: 400,
      result: `Promo doesn't exists!`,
    };
  }

  return {
    status: 200,
    result: promo,
  };
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

// exports._edit = async (params, facilitiesId) => {
//   const facility = await model.facilities.findOne({
//     where: {
//       id: facilitiesId,
//     },
//   });

//   if (!facility) {
//     return {
//       status: 400,
//       message: `Facilities with ID (${facilitiesId}) not found!`,
//     };
//   }

//   return await model.facilities
//     .update(params.body, {
//       where: {
//         id: facilitiesId,
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