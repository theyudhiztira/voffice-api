module.exports = (app) => {
    const client = require('../controllers/clients');
    const validator = require('../validators/clients.validator.js');
    const checkAuth = require('../middlewares/auth');

    app.post('/clients', validator.create, client.create);
}