module.exports = (app) => {
    const auth = require('../controllers/auth.controller.js');
    const user = require('../controllers/user.controller.js');
    const validator = require('../validators/users.validator.js');

    app.post('/register', validator.registerValidator(), validator.validate, user.create);
    app.post('/login', auth.login);
    app.post('/verify-token', auth.verifyToken);
}