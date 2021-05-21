const model = require("../../models");
const {Op} = require("sequelize");
const moment = require("moment");

exports._create = async (params) => {
  
  const pic = await model.pic.findOne({
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
  })

  if (pic) {
    return {
      status: 400,
      message:
        pic.email === params.email
          ? `Client email is already in use (PIC ID: ${pic.id})`
          : `Client phone is already in use (PIC ID: ${pic.id})`,
    }
  }

  params.created_at = moment().tz('Asia/Jakarta').format("YYYY-MM-D HH:mm:ss")
  params.updated_at = moment().tz('Asia/Jakarta').format("YYYY-MM-D HH:mm:ss")

  return await model.pic.create(params)
    .then((result) => {
      
      return {
        status: 200,
        message: "Successfully Create Client.",
        data: {
          pic_id: result.id
        }
      }
      
    })
    .catch((err) => {

      return {
        status: 500,
        message: err.message,
      }

    })
};

exports._get = async (filter) => {
  pic = await model.pic.findAll({
    where: filter,
    include: {
      model: model.client_business_needs,
    },
  });

  if (!pic) {
    return {
      status: 400,
      message: `Client doesn't exists!`,
    };
  }

  return {
    status: 200,
    message: pic,
  };
};

exports._search = async (filter) => {
  const search = filter;

  const pic = await model.pic.findAll({
    where: {
      [Op.or]: [
        {first_name: {[Op.like]: "%" + search.first_name + "%"}},
        {last_name: {[Op.like]: "%" + search.last_name + "%"}},
        {id: {[Op.like]: "%" + search.id + "%"}},
      ],
    },
    include: [
      {
        model: model.companies,
      },
      {
        model: model.client_business_needs,
      },
    ],
  });

  if (!pic) {
    return {
      status: 400,
      message: `Client doesn't exists!`,
    };
  }

  return {
    status: 200,
    message: pic,
  };
};

exports._edit = async (params, pic_id) => {
  const pic = await model.pic.findOne({
    where: {
      id: pic_id,
    },
  });

  if (!pic) {
    return {
      status: 400,
      message: `Client with ID (${pic_id}) not found!`,
    };
  }

  return await model.pic
    .update(params, {
      where: {
        id: pic_id,
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
