module.exports = (app) => {
  const company = require("../controllers/company");
  const validator = require("../validators/clients.validator.js");
  const checkAuth = require("../middlewares/auth");

  app.post("/company", checkAuth, validator.create, company.create);
  app.get("/company", checkAuth, company.get);
};
