module.exports = (app) => {

    const checkAuth = require('../middlewares/auth.js')
    const userGroup = require('../controllers/user_group');

    app.post('/user-group', checkAuth , userGroup.create);
    app.get('/user-group', checkAuth, userGroup.showAll);
    app.get('/user-group/:id', checkAuth, userGroup.show);
    app.put('/user-group/:id', checkAuth, userGroup.update);
    app.delete('/user-group/:id', checkAuth, userGroup.delete);
}