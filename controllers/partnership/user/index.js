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

exports.changePassword = async (req, res) => {
    const body = req.body;
    let error = true;

    if (!body.user_id){
        error = false;
    }else if(!body.oldPassword){
        error = false;
    }else if(!body.newPassword){
        error = false;
    }

    if (!error){
        return res.status(401).send({
            message: 'Please check your credentials!'
        });
    }
    
    return await model.users.findOne({
        where: {
            id: body.user_id,
            password: md5(body.oldPassword)
        }
    }).then( user => {

        if (!user) {
            return res.status(401).send({
                message: 'User ID and Old Password not found!'
            });
        }

        return user.update({
            password: md5(body.newPassword)
        }).then( result => {
            return res.status(200).json({
                message: 'Password has been changed!'
            });
        }).catch(e => {
            return res.status(400).json({
                message: e.message()
            });
        })
        
    }).catch( e => {
        return res.status(400).json({
            message: e.message()
        });
    });
}