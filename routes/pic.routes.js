module.exports = (app) => {
  const pic = require("../controllers/pic");
  // const validator = require("../validators/clients.validator.js");
  const checkAuth = require("../middlewares/auth");

  app.get("/pic", checkAuth, pic.get);
  app.get("/search-pic", checkAuth, pic.search);
  app.post("/pic", checkAuth, pic.create);
  app.put("/pic/:pic_id", checkAuth, pic.edit);
};
