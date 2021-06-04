module.exports = (app) => {
  const plan = require("../controllers/plan");
  // const validator = require("../validators/clients.validator.js");
  const checkAuth = require("../middlewares/auth");

  app.get('/plan', checkAuth, plan.get)
  app.post("/plan", checkAuth, plan.create);
};
