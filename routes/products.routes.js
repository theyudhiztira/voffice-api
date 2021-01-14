module.exports = (app) => {
    const product = require('../controllers/products');
    const validator = require('../validators/products.validator.js');
    const checkAuth = require('../middlewares/auth');

    app.post('/products', checkAuth, validator.validate, product.create);
    app.get('/products', checkAuth, product.getAll);
    app.get('/products/:product_id', checkAuth, product.get);
    app.put('/products/:product_id', checkAuth, product.update);
    app.delete('/products/:product_id', checkAuth, product.delete);
}