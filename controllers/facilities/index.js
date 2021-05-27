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
  const filter = hero.paramFilter(["id"], req.query);

  let func = await controller._get(filter);

  func.status !== 200 ? (statusCode = func.status) : (statusCode = 200);

  return res.status(statusCode).send(func);
};

exports.search = async (req, res) => {
  const filter = hero.paramFilter(["id", "full_name"], req.query);

  let func = await controller._search(filter);

  func.status !== 200 ? (statusCode = func.status) : (statusCode = 200);

  return res.status(statusCode).send(func);
};

exports.edit = async (req, res) => {
  let func = await controller._edit(req.body, req.params.pic_id);

  func.status !== 200 ? (statusCode = func.status) : (statusCode = 200);

  return res.status(statusCode).send(func);
};
