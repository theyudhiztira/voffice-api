module.exports = (app) => {
    const auth = require('../controllers/auth.controller.js');
    const checkAuth = require('../middlewares/auth.js')
    const locations = require('../controllers/locations.controller.js');
    const user = require('../controllers/user.controller.js');
    const validator = require('../validators/users.validator.js');
    const locationValidator = require('../validators/locations.validator.js');

    app.post('/register', validator.registerValidator(), validator.validate, user.create);
    app.post('/login', auth.login);
    app.post('/verify-token', auth.verifyToken);

    app.post('/locations', locationValidator.validate, locations.create);
}