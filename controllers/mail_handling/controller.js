const model = require("../../models");
const {Op} = require("sequelize");
const controller = require("./controller");
const hero = require("../../lib/hero");
const moment = require("moment");
const {sequelize} = require("../../models");
const path = require("path")

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
      where: filter,
      include: [
        {
          model: model.users,
          as: 'received_by'
        },
        {
          model: model.users,
          as: 'passed_by'
        },
      ]
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


exports._mailForwarding = async (params) => {
  try {
    let mailIds;
    if(typeof params.mail.mailIds !== "string") mailIds = [...params.mail.mailIds]
    else mailIds = JSON.parse(params.mail.mailIds)

    delete params.mail.mailIds

    const mail = await model.mail_handling.findAll({
      where: { id: mailIds }
    })  

    if(mail.length !== mailIds.length) {
      return {
        status: 400,
        message: `Mail not found!`,
      }
    }

    if(params.mail.action === "forward") {
      const fileData = params.proofImages
      delete params.mail.action

      let filename = `${mailIds.join("&")}-proof-images.${(fileData.mimetype).split('/').pop()}`;
      const rootFolder = path.dirname(require.main.filename);
  
      await fileData.mv(`${rootFolder}/storage/facilities/${filename}`, (err) => {
        console.log(err ? err : "File saved")
      });
      
      params.mail.proof_image = filename
      params.mail.status = 2

      const doUpdate = await model.mail_handling.update(params.mail, {
        where: { id: mailIds }
      })
  
      return {
        status: 200,
        message: "Successfully Forwarding Mail."
      }
    } else if(params.mail.action === "retrieve") {

      delete params.mail.action
      params.mail.status = 1
      
      const doUpdate = await model.mail_handling.update(params.mail, {
        where: { id: mailIds }
      })

      return {
        status: 200,
        message: "Successfully Retrieve Mail."
      }
    }

    return {
      status: 500,
      message: "Something error"
    }

  } catch (err) {
    return {
      status: 500,
      message: err.message,
    }
  }
}