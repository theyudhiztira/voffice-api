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
          model: model.users
        }
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
    const mail = await model.mail_handling.findOne({
      where: { id: params.mailId }
    })  

    if(!mail) {
      return {
        status: 400,
        message: `Mail not found!`,
      }
    }

    const fileData = params.proofImages

    let filename = `${mail.id}-proof-images.${(fileData.mimetype).split('/').pop()}`;
    const rootFolder = path.dirname(require.main.filename);

    await fileData.mv(`${rootFolder}/storage/facilities/${filename}`, (err) => {
      console.log(err ? err : "File saved")
    });

    params.dataMail.proof_image = filename

    const doUpdate = await model.mail_handling.update(params.dataMail, {
      where: { id: params.mailId }
    })

    return {
      status: 200,
      message: "Successfully Forwarding Mail."
    }
  } catch (err) {
    return {
      status: 500,
      message: err.message,
    }
  }
}