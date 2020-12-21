const controller = require('./controller');
const hero = require('../../../lib/hero');

exports.getSo = (req, res) => {
    controller.getServicedOffices(parseInt(req.userData.locationId), req.query)
    .then(data => {
        return res.status(200).send((data));
    })
    .catch(err => {
        return res.status(500).send({
            message: err.message
        })
    })
}

exports.getDetails = (req, res) => {
    controller.getDetails(parseInt(req.params.roomId))
    .then(data => {
        if(!data.data){
            return res.status(404).send({});
        }

        return res.status(200).send(data.data)
    })
    .catch(err => {
        console.log(err)
        return res.status(500).send(err);
    })
}