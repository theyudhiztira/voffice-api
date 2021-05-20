const model = require("../../models");

exports.create = async (params) => {
  return await model.locations
    .create(params)
    .then((result) => {
      return {
        status: true,
      };
    })
    .catch((err) => {
      return {
        status: false,
        message: err.message,
      };
    });
};

exports.showAll = async (params) => {
  const filter = {
    where: params,
  };

  const data = await model.locations.findAll(params ? filter : {});
  return data;
};

exports.show = async (location_id) => {
  try {
    const data = await model.locations.findOne({
      where: {
        id: location_id,
      },
    });

    return data;
  } catch (err) {
    console.log(err);
  }
};

exports.update = async (params, location_id) => {
  return await model.locations
    .update(params, {
      where: {
        id: location_id,
      },
    })
    .then(() => {
      return {
        status: true,
      };
    })
    .catch((err) => {
      return {
        status: false,
        message: err.message,
      };
    });
};

exports.delete = (location_id) => {
  return model.locations
    .destroy({
      where: {
        id: location_id,
      },
    })
    .then(() => {
      return {
        status: true,
      };
    })
    .catch((err) => {
      return {
        status: false,
        message: err.message,
      };
    });
};
