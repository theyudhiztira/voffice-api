module.exports = (app) => {
  const facilities = require("../controllers/facilities");
  // const validator = require("../validators/clients.validator.js");
  const checkAuth = require("../middlewares/auth");

  app.get("/facilities", checkAuth, facilities.get);
  app.get("/search-facilities", checkAuth, facilities.search);
  app.post("/facilities", checkAuth, facilities.create);
  app.put("/facilities/:facilities_id", checkAuth, facilities.edit);
  app.get('/facilities/:filename', checkAuth, facilities.readFile)
};
