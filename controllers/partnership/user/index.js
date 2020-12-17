const locationController = require('../locations/controller')
const model = require('../../../models/partnership')
const md5 = require('md5')
const jwt = require('jsonwebtoken')

exports.login = async (req, res) => {
    const body = req.body;

    const findUser = await model.users
    .findOne({
        where: {
            email: body.email
        }
    });

    if (!findUser) {
        return res.status(401).send({
            message: 'Please check your credentials!'
        });
    }

    const data = findUser;
    if(md5(body.password) !== data.password){
        return res.status(401).send({
            message: 'Please check your credentials!'
        });
    }

    let encodedToken = jwt.sign({
        userId: data.id,
        email: data.email,
        locationId: data.location
    }, process.env.JWT_KEY, {
        expiresIn: "8h"
    });

    data.location = await locationController._get(data.location);

    return res.status(200).send({
        token: encodedToken,
        data: {
            userId: data.id,
            email: data.email,
            name: `${data.first_name} ${data.last_name}`,
            location: data.location
        }
    });
}