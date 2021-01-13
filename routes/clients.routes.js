module.exports = (app) => {
    const client = require('../controllers/clients');
    const validator = require('../validators/clients.validator.js');
    const checkAuth = require('../middlewares/auth');

    app.post('/clients', checkAuth, validator.create, client.create);
    app.put('/clients/:client_id', checkAuth, validator.edit, client.edit);
}