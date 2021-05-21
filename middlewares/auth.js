const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const decodedToken = jwt.verify(req.headers.authorization.split(" ")[1], process.env.JWT_KEY)

    req.userData = decodedToken;

    req.query.limit = req.query.limit
      ? req.query.limit > 50
        ? 50
        : req.query.limit
      : 10;
    req.query.page = req.query.page
      ? req.query.page < 1
        ? 1
        : req.query.page
      : 1;

    next();
  } catch (error) {
    return res.status(403).send({
      message: "Auth Failed",
    });
  }
};
