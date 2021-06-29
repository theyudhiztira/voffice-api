module.exports = (app) => {
  const company = require("../controllers/company");
  const validator = require("../validators/companies.validator");
  const checkAuth = require("../middlewares/auth");

  app.get("/company", checkAuth, company.get);
  app.get("/search-company", checkAuth, company.search);
  app.post("/company", checkAuth, validator.create, company.create);
  
  app.get("/company/call-contacts/:companyId", checkAuth, company.getCallContacts);
  app.post("/company/call-contacts", checkAuth, company.createCallContacts);
  app.put("/company/edit/:companyId", checkAuth, validator.edit, company.edit);

//   app.get("/company/call-handling/:companyId", checkAuth, company.getCall);
  app.post("/company/call-handling", checkAuth, company.createCall);
};
