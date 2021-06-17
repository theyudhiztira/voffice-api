module.exports = (app) => {
  const invoice = require("../controllers/invoices");
  // const validator = require("../validators/clients.validator.js");
  const checkAuth = require("../middlewares/auth");

  app.put("/generate", checkAuth, invoice.generateInvoice)
};
