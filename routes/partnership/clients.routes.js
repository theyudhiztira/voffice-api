module.exports = app => {
    const client = require('../../controllers/partnership/clients');

    app.get('/partnership/clients', client.show);
}