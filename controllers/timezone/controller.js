const model = require("../../models");

exports._getAll = async (filter) => {
  const data = await model.timezone.findAll();

  return data;
};
