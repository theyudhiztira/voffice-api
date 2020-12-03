module.exports = (app) => {
    const product = require('../controllers/products');
    const checkAuth = require('../middlewares/auth');

    app.get('/products', checkAuth, product.getAll);
}