module.exports = (app) => {
  const callContacts = require("../controllers/call_contacts");
  const validator = require("../validators/clients.validator.js");
  const checkAuth = require("../middlewares/auth");

  app.get("/call-contacts", checkAuth, callContacts.get);
  app.post("/call-contacts", checkAuth, callContacts.create);
};
