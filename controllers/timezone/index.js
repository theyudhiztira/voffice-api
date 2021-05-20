const controller = require("./controller");

exports.getAll = async (req, res) => {
  const func = await controller._getAll();

  return res.status(200).send(func);
};
