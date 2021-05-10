const model = require("../../models");
const {Op} = require("sequelize");
const controller = require("./controller");
const hero = require("../../lib/hero");
const moment = require("moment");

exports._create = async (params) => {
  const client = await model.clients.findOne({
    where: {
      [Op.or]: [
        {
          email: params.email,
        },
        {
          phone: params.phone,
        },
      ],
    },
  });

  if (client) {
    return {
      status: 400,
      message:
        client.email === params.email
          ? `Client email is already in use (${client.id})`
          : `Client phone is already in use (${client.id})`,
    };
  }

  // const business_needs = params.business_needs;
  params.status = 0;
  params.created_at = moment().format("Y-m-d");
  params.updated_at = moment().format("Y-m-d");
  delete params.business_needs;

  return await model.clients
    .create(params)
    .then((resultClient) => {
      // let business_needs_arr = [];
      // for (let i = 0; i < business_needs.length; i++) {
      //     business_needs_arr.push({
      //         client_id: resultClient.dataValues.id,
      //         product_category_id: business_needs[i],
      //     })
      // }

      // return model.client_business_needs
      //     .bulkCreate(business_needs_arr)
      //     .then(() => {

      return {
        status: 200,
        message: "Successfully Create Client.",
      };

      //     }).catch(err => {
      //         return {
      //             status: 200,
      //             message: err.message
      //         }
      //     });
    })
    .catch((err) => {
      return {
        status: 500,
        message: err.message,
      };
    });
};

exports._get = async (filter) => {
  const client = await model.clients.findAll({
    where: filter,
    include: {
      model: model.client_business_needs,
    },
  });

  if (!client) {
    return {
      status: 400,
      message: `Client doesn't exists!`,
    };
  }

  return {
    status: 200,
    message: client,
  };
};

exports._edit = async (params, client_id) => {
  const client = await model.clients.findOne({
    where: {
      id: client_id,
    },
  });

  if (!client) {
    return {
      status: 400,
      message: `Client with ID (${client_id}) not found!`,
    };
  }

  return await model.clients
    .update(params, {
      where: {
        id: client_id,
      },
    })
    .then((resultClient) => {
      return {
        status: 200,
        message: "Successfully Update Client.",
      };
    })
    .catch((err) => {
      return {
        status: 500,
        message: err.message,
      };
    });
};
