const controller = require('./controller');
const hero = require('../../../lib/hero');

exports.getSo = (req, res) => {
    const locationId = req.params.locationId ? req.params.locationId : req.userData.locationId;
    
    controller.getServicedOffices(parseInt(locationId))
    .then(data => {
        return res.status(200).send(data.data);
    })
    .catch(err => {
        return res.status(500).send({
            message: err.message
        })
    })
}