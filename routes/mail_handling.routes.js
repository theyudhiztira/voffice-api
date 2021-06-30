module.exports = (app) => {
  const mailHandling = require("../controllers/mail_handling");
  const validator = require("../validators/clients.validator.js");
  const checkAuth = require("../middlewares/auth");

  app.get("/company/mail-handling", checkAuth, mailHandling.get);
  app.post("/company/mail-handling", checkAuth, mailHandling.create);
  app.put("/company/mail-handling/:mailId", checkAuth, mailHandling.mailForwarding);
};
