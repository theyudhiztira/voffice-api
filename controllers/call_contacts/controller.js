const model = require("../../models");
const {Op} = require("sequelize");
const controller = require("./controller");
const hero = require("../../lib/hero");
const moment = require("moment");
const {sequelize} = require("../../models");

exports._create = async (params) => {
  try {
    params.status = 1
    params.created_at =  moment().format("Y-m-d");
    params.updated_at =  moment().format("Y-m-d");

    const doCreate = await model.call_contacts.create(params)

    return {
      status: 200,
      message: "Successfully Create Client.",
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
    const callContacts = await model.call_contacts.findAll({
      where: filter
    })
  
    if (!callContacts) {
      return {
        status: 400,
        message: `Call Contacts doesn't exists!`,
      };
    }
  
    return {
      status: 200,
      message: callContacts,
    };
  } catch (err) {
    return {
      status: 500,
      message: err.message,
    }
  }
};
