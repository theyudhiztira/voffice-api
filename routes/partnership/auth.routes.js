module.exports = (app) => {
    const user = require('../../controllers/partnership/user');

    app.post('/partnership/login', user.login);
    // app.post('/partnership/verify-token', user.verifyToken);
}