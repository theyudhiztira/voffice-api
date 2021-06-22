const model = require("../../models");
const controller = require("./controller");
const hero = require("../../lib/hero");
const path = require('path')

exports.get = async (req, res) => {
  const filter = hero.paramFilter(["id"], req.query);

  let func = await controller._get(filter);

  func.status !== 200 ? (statusCode = func.status) : (statusCode = 200);

  return res.status(statusCode).send(func);
};

exports.getSchedule = async (req, res) => {
  const filter = hero.paramFilter(["id", "date", "facility_id"], req.query);

  let func = await controller._getSchedule(filter);

  func.status !== 200 ? (statusCode = func.status) : (statusCode = 200);

  return res.status(statusCode).send(func);
}

exports.bookingFacility = async (req, res) => {
  req.body.created_by = req.userData.userId;

  let func = await controller._bookingFacility(req.body);

  func.status !== 200 ? (statusCode = func.status) : (statusCode = 200);
  
  return res.status(statusCode).send(func);
}