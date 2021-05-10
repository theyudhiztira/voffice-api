const controller = require("./controller");
const hero = require("../../lib/hero");

exports.create = async (req, res) => {
  let func = await controller._create(req.body);

  func.status !== 200 ? (statusCode = func.status) : (statusCode = 200);

  return res.status(statusCode).send(func);
};

exports.get = async (req, res) => {
  console.log(req.query);
  const filter = hero.paramFilter(["id", "client_id"], req.query);
  console.log(filter);
  let func = await controller._get(filter);

  func.status !== 200 ? (statusCode = func.status) : (statusCode = 200);

  return res.status(statusCode).send(func);
};
