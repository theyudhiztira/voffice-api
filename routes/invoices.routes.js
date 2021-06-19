module.exports = (app) => {
  const invoice = require("../controllers/invoices");
  // const validator = require("../validators/clients.validator.js");
  const checkAuth = require("../middlewares/auth");

  app.put("/invoices/generate", checkAuth, invoice.generateInvoice)
};
