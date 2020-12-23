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
        return res.status(500).send(err);
    })
}

exports.getChartReport = (req, res) => {
    controller.getServicedOffices(parseInt(req.userData.locationId), {page: 1, limit: 9999})
    .then(query => {
        const result = {
            empty: 0,
            occupied: 0,
            booked: 0,
            disabled: 0
        };

        (query.data).map(v => {
            const data = JSON.parse(JSON.stringify(v));

            if(data.status === 0){
                result.empty = result.empty+1;
            }else if(data.status === 1){
                result.booked = result.booked+1;
            }else if (data.status === 6){
                result.disabled = result.disabled+1;
            }else{
                result.occupied = result.occupied+1;
            }
        })

        return res.status(200).send(result)
    }).catch(err => {
        return res.status(500).send({
            message: err.message
        });
    })
}