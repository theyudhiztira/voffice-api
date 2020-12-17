const controller = require('./controller.js');

exports.get = async (req, res) => {
    let data = await controller._get(req.params.location_id);
    if(data){
        return res.status(200).send(data);
    }else{
        return res.status(500).send('Oops! An Error Occured')
    }
}