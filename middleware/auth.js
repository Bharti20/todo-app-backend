const jwt = require('jsonwebtoken')
require('dotenv').config()
module.exports = (req,res, next) => {
    let token = req.headers.authorization 
    jwt.verify(token, process.env.SECRET_KEY, (err, jwtverified) => {
        if(err) {
            res.send(err)
        }else {
            console.log(jwtverified)
        }
    })
    next()
};
