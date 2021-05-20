module.exports = (app) => {
  const timezone = require("../controllers/timezone");
  const checkAuth = require("../middlewares/auth");

  app.get("/timezones", checkAuth, timezone.getAll);
};
