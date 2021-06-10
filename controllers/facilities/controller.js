const model = require("../../models");
const {Op} = require("sequelize");
const moment = require("moment");
const path = require('path');

exports._create = async (params) => {

  params.body.created_at = moment().tz('Asia/Jakarta').format("YYYY-MM-D HH:mm:ss")
  params.body.updated_at = moment().tz('Asia/Jakarta').format("YYYY-MM-D HH:mm:ss")

  return await model.facilities.create(params.body)
  .then(async (facility) => {
    const fileData = params.files.images

      let filename = `${facility.id}-images.${(fileData.mimetype).split('/').pop()}`;
      const rootFolder = path.dirname(require.main.filename);

      await fileData.mv(`${rootFolder}/storage/facilities/${filename}`, (err) => {
        console.log(err ? err : "File saved")
      });
        

      await model.facilities.update({ images: filename }, 
        {
            where: {
                id: facility.id
            }
        }) 

        return {
          status: 200,
          message: "Successfully Create Facility."
        }
    })
    .catch((err) => {
      return {
        status: 500,
        message: err.message,
      }
    })
};  

exports._get = async (filter) => {
  pic = await model.facilities.findAll({
    where: filter,
  });

  if (!pic) {
    return {
      status: 400,
      message: `Client doesn't exists!`,
    };
  }

  return {
    status: 200,
    message: pic,
  };
};

exports._search = async (filter) => {
  const search = filter;

  console.log(search);

  const pic = await model.pic.findAll({
    where: {
      [Op.or]: [
        {full_name: {[Op.like]: "%" + search.full_name + "%"}},
        {id: {[Op.like]: "%" + search.id + "%"}},
      ],
    },
    include: { model: model.companies }
  });

  if (!pic) {
    return {
      status: 400,
      message: `PIC doesn't exists!`,
    };
  }

  return {
    status: 200,
    message: pic,
  };
};

exports._edit = async (params, facilitiesId) => {
  const facility = await model.facilities.findOne({
    where: {
      id: facilitiesId,
    },
  });

  if (!facility) {
    return {
      status: 400,
      message: `Facilities with ID (${facilitiesId}) not found!`,
    };
  }

  return await model.facilities
    .update(params.body, {
      where: {
        id: facilitiesId,
      },
    })
    .then((resultClient) => {
      return {
        status: 200,
        message: "Successfully Update Client.",
      };
    })
    .catch((err) => {
      return {
        status: 500,
        message: err.message,
      };
    });
};

exports._upload = async (image) => {
  try {
    const rootFolder = path.dirname(require.main.filename);
    const allowedFile = 'images'
    console.log(image);
    console.log(image);

  } catch (err) {
    console.log(err);
  }
} 


// module.exports = {
//     uploadBrochure: async (req, res) => {
//         const allowedFile = ['brochure'];
//         const rootFolder = path.dirname(require.main.filename);
        
//         await (Object.keys(req.files)).map(async v => {

//             if(!allowedFile.includes(v)) return delete req.files[v];
            
//             const fileData = req.files[v];

//             let insertBrochure = await model.brochures.create({
//                 createdByVoxId: req.body.voxUserId,
//                 createdByVoxUser: req.body.voxUserName,
//                 price: req.body.price,
//                 link: req.body.link,
//                 name: req.body.name
//             })

//             insertBrochure = JSON.parse(JSON.stringify(insertBrochure))
//             let filename = `${insertBrochure.id}-brochure.${(fileData.mimetype).split('/').pop()}`;

//             fileData.mv(`${rootFolder}/storage/brochures/${filename}`, (err) => {
//                 return console.log(err ? err : "File saved")
//             });

//             return await model.brochures.update({
//                 file: filename,
//             }, {
//                 where: {
//                     id: insertBrochure.id
//                 }
//             })
//         })

//         return res.status(200).send(true)
//     },

//     get: async (req, res) => {
//         const filter = {
//             status: '1'
//         }

//         let result = [];

//         const findBrochure = await hero.paginate(model.brochures, req.query.page, req.query.limit, {where: filter})

//         const data = JSON.parse(JSON.stringify(findBrochure.data));


//         data.map(v => {
//             v = {
//                 ...v,
//                 filePath: `http://${req.headers.host}/brochure/${v.file}`
//             }

//             result.push(v)
//         })

//         findBrochure.data = result;

//         return res.status(200).send(findBrochure);
//     },

//     readFile: async (req, res) => {
//         const filename = req.params.filename;
//         const filePath = path.join(__dirname,'../../storage/brochures/'+filename)
//         res.sendFile(filePath, function(err){
//             if (err){
//                 return res.sendStatus(err.status)
//             }
//         });
//     }
// }
