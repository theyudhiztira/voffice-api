const model = require("../../models");
const controller = require("./controller");
const hero = require("../../lib/hero");

exports.create = async (req, res) => {
  req.body.created_by = req.userData.userId;

  let func = await controller._create(req.body);

  func.status !== 200 ? (statusCode = func.status) : (statusCode = 200);

  return res.status(statusCode).send(func);
};

exports.get = async (req, res) => {
  const filter = hero.paramFilter(["id", "plan_id", "company_id"], req.query);

  let func = await controller._get(filter);

  func.status !== 200 ? (statusCode = func.status) : (statusCode = 200);

  return res.status(statusCode).send(func);
};
