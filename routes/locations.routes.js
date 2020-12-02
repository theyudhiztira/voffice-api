module.exports = (app) => {
    const locations = require('../controllers/locations');
    const validator = require('../validators/locations.validator.js');
    const checkAuth = require('../middlewares/auth.js');

    app.post('/locations', checkAuth, validator.validate, locations.create);
    app.get('/locations', checkAuth, locations.showAll);
    app.get('/locations/:location_id', checkAuth, locations.show);
    app.put('/locations/:location_id', checkAuth, locations.update);
    app.delete('/locations/:location_id', checkAuth, locations.delete);
}