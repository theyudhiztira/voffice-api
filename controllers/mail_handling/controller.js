const model = require("../../models");
const {Op} = require("sequelize");
const controller = require("./controller");
const hero = require("../../lib/hero");
const moment = require("moment");
const {sequelize} = require("../../models");

exports._create = async (params) => {
  try {
    params.created_at =  moment().format("Y-m-d");
    params.updated_at =  moment().format("Y-m-d");

    const doCreate = await model.mail_handling.create(params)

    return {
      status: 200,
      message: "Successfully Create Mail.",
      data: doCreate
    }

  } catch (err) {
    return {
      status: 500,
      message: err.message,
    }
  }
};

exports._get = async (filter) => {
  try {
    const mail = await model.mail_handling.findAll({
      where: filter
    })
  
    if (!mail) {
      return {
        status: 400,
        message: `Mail doesn't exists!`,
      };
    }
  
    return {
      status: 200,
      result: mail,
    };
  } catch (err) {
    return {
      status: 500,
      message: err.message,
    }
  }
};