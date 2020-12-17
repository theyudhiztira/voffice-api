module.exports = app => {
    const location = require('../../controllers/partnership/locations');

    app.get('/partnership/location/:location_id', location.get);
}