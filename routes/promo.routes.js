module.exports = (app) => {
  const promo = require("../controllers/promo");
//   const validator = require("../validators/locations.validator.js");
  const checkAuth = require("../middlewares/auth.js");

//   app.post("/locations", checkAuth, validator.validate, locations.create);
  app.get("/promo", checkAuth, promo.get);
//   app.get("/locations/:location_id", checkAuth, locations.show);
//   app.put("/locations/:location_id", checkAuth, locations.update);
//   app.delete("/locations/:location_id", checkAuth, locations.delete);
};
