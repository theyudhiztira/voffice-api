const model = require("../../models");
const controller = require("./controller");
const hero = require("../../lib/hero");
const path = require('path')

// exports.create = async (req, res) => {
//   req.body.created_by = req.userData.userId;
//   let func = await controller._create(req);

//   func.status !== 200 ? (statusCode = func.status) : (statusCode = 200);

//   return res.status(statusCode).send(func);
// };

exports.get = async (req, res) => {
  const filter = hero.paramFilter(["id"], req.query);

  let func = await controller._get(filter);

  func.status !== 200 ? (statusCode = func.status) : (statusCode = 200);

  return res.status(statusCode).send(func);
};

// exports.search = async (req, res) => {
//   const filter = hero.paramFilter(["id", "full_name"], req.query);

//   let func = await controller._search(filter);

//   func.status !== 200 ? (statusCode = func.status) : (statusCode = 200);

//   return res.status(statusCode).send(func);
// };

// exports.edit = async (req, res) => {
//   let func = await controller._edit(req, req.params.facilities_id);

//   func.status !== 200 ? (statusCode = func.status) : (statusCode = 200);

//   return res.status(statusCode).send(func);
// };

// exports.readFile = async(req, res) => {
//   const filename = req.params.filename
//   const filepath = path.join(__dirname, '../../storage/facilities/' + filename)
//   res.sendFile(filepath, function(err) {
//     if(err) return res.sendStatus(err.status)
//   })
// }