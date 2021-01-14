module.exports = (app) => {
    const product = require('../controllers/product_categories');
    const validator = require('../validators/product_categories.validator.js');
    const checkAuth = require('../middlewares/auth');

    app.post('/product_categories', checkAuth, validator.validate, product.create);
    app.get('/product_categories', checkAuth, product.getAll);
    app.get('/product_categories/:product_category_id', checkAuth, product.get);
    app.put('/product_categories/:product_category_id', checkAuth, product.update);
    app.delete('/product_categories/:product_category_id', checkAuth, product.delete);
}