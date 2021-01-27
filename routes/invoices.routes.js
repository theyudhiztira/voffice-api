module.exports = (app) => {
    const invoices = require('../controllers/invoices');
    const validator = require('../validators/invoices.validator.js');
    const checkAuth = require('../middlewares/auth.js');

    app.post('/invoices', checkAuth, validator.validate, invoices.create);
    app.get('/invoices', checkAuth, invoices.get);
    app.put('/invoices/:invoice_id', checkAuth, invoices.edit);
}