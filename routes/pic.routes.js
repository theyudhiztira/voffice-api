module.exports = (app) => {
    const pic = require('../controllers/pic');
    const validator = require('../validators/pic.validator.js');
    const checkAuth = require('../middlewares/auth');

    app.post('/pic', checkAuth, validator.create, pic.create);
    app.get('/pic', checkAuth, pic.get);
    app.put('/pic/:pic_id', checkAuth, validator.edit, pic.edit);
}