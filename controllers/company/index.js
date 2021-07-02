const controller = require("./controller");
const hero = require("../../lib/hero");

exports.create = async (req, res) => {
  let func = await controller._create(req.body, req.userData.userId);

  func.status !== 200 ? (statusCode = func.status) : (statusCode = 200);

  return res.status(statusCode).send(func);
};

exports.get = async (req, res) => {
  const filter = hero.paramFilter(["id", "pic_id", 'company_name'], req.query);

  let func = await controller._get(filter);

  func.status !== 200 ? (statusCode = func.status) : (statusCode = 200);

  return res.status(statusCode).send(func);
};

exports.search = async (req, res) => {
  const filter = hero.paramFilter(["id", "pic_id", "company_name"], req.query);

  let func = await controller._search(filter);

  func.status !== 200 ? (statusCode = func.status) : (statusCode = 200);

  return res.status(statusCode).send(func);
};

exports.edit = async (req, res) => {
  let func = await controller._edit(req.body, req.params.companyId);

  func.status !== 200 ? (statusCode = func.status) : (statusCode = 200);

  return res.status(statusCode).send(func);
};

exports.createCall = async (req, res) => {
  req.body.created_by = req.userData.userId;

  let func = await controller._createCall(req.body);

  func.status !== 200 ? (statusCode = func.status) : (statusCode = 200);

  return res.status(statusCode).send(func);
};

exports.createCallContacts = async (req, res) => {
  req.body.created_by = req.userData.userId;

  let func = await controller._createCallContacts(req.body);

  func.status !== 200 ? (statusCode = func.status) : (statusCode = 200);

  return res.status(statusCode).send(func);
};

exports.getCallContacts = async (req, res) => {
  let func = await controller._getCallContacts(req.params.companyId);

  func.status !== 200 ? (statusCode = func.status) : (statusCode = 200);

  return res.status(statusCode).send(func);
};

exports.getCallLog = async (req, res) => {
  let func = await controller._getCallLog(req.params.companyId);

  func.status !== 200 ? (statusCode = func.status) : (statusCode = 200);

  return res.status(statusCode).send(func);
}