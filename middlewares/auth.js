const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try{
        const decodedToken = jwt.verify(req.headers.authorization.split(" ")[1], process.env.JWT_KEY);
        req.userData = decodedToken;
        next();
    }catch(error){
        return res.status(403).send({
            message: 'Auth Failed'
        });
    }
}