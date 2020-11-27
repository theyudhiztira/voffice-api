module.exports = (app) => {
    const auth = require('../controllers/auth.controller.js');
    const validator = require('../validators/users.validator.js');

    app.post('/register', validator.registerValidator(), validator.validate, auth.create);
    app.post('/login', auth.login);
    app.post('/verify-token', auth.verifyToken);
}