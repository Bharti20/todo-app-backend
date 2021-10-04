const jwt = require('jsonwebtoken')
require('dotenv').config()
module.exports = async(req,res, next) => {
    try{
        let token = '';
        if(!req.headers.authorization ){
            return res.status(401)
            .send({
                massage: 'Token not found',
                status: 401
            })
        }else{
            token = req.headers.authorization 
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        req.tokenData = decoded
        next();
    }catch(err){
        return res.status(401)
        .send({
            error: 'unauthorized',
            message: err.message,
            status: 401
        });
    };
    
};
