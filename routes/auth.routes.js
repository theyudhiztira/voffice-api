module.exports = (app) => {
    const auth = require('../controllers/auth.controller.js');
    const user = require('../controllers/user.controller.js');
    const user_group = require('../controllers/user_group.controller.js');
    const validator = require('../validators/users.validator.js');

    app.post('/register', validator.registerValidator(), validator.validate, user.create);
    app.post('/login', auth.login);
    app.post('/user_group', user_group.create);
    app.post('/verify-token', auth.verifyToken);
}