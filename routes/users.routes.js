module.exports = (app) => {
    const user = require('../controllers/user');
    const validator = require('../validators/users.validator.js');
    const checkAuth = require('../middlewares/auth.js');

    app.post('/users', checkAuth ,validator.validate, user.create);
    // app.get('/users', checkAuth, user.getAll);
    // app.get('/users/:user_id', checkAuth, user.get);
    // app.put('/users/:user_id', checkAuth, user.update);
    // app.delete('/users/:user_id', checkAuth, user.delete);


}