module.exports = (app) => {
    const chcekAuth = require('../../middlewares/partnership/auth');
    const occupancy = require('../../controllers/partnership/servicedOffices');

    app.get('/partnership/serviced-offices', chcekAuth, occupancy.getSo);
    app.get('/partnership/serviced-offices/:roomId', chcekAuth, occupancy.getDetails);
}