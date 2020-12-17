module.exports = (app) => {
    const revenue = require('../../controllers/partnership/revenue');

    app.get('/partnership/revenue/:location_id', revenue.get);
}