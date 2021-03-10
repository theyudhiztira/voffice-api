module.exports = app => {
    const report = require('../../controllers/partnership/reports');
    const chcekAuth = require('../../middlewares/partnership/auth');

    app.get('/partnership/reports', chcekAuth, report.get);
}