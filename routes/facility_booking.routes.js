module.exports = (app) => {
  const facilityBooking = require("../controllers/facility_booking");
  // const validator = require("../validators/clients.validator.js");
  const checkAuth = require("../middlewares/auth");

  app.get("/facility-schedules", checkAuth, facilityBooking.getSchedule)
  app.post("/facility-booking", checkAuth, facilityBooking.bookingFacility)
};
