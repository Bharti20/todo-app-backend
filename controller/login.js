const knex = require('../dbConnection/connection')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require('dotenv').config()
module.exports.login = (req, res) => {
    knex.select('*').from('users').then((userData) => {
        let i = 0
        while(i<userData.length-1) {
            if(req.body.email == userData[i]['email']){
                break;
            }i++
        }
        if(req.body.email == userData[i]['email']){
            bcrypt.compare(req.body.password,userData[i]['password'], (err, response) => {
                if(err) throw err;
                console.log(response)
                if(response) {
                    let dataForToken = {
                        email: req.body.email,
                        password: req.body.password
                    };
                    let token = jwt.sign(dataForToken, process.env.SECRET_KEY)
                    res.send(`User login succesfully. 
                    token:${token}`)
                }else{
                    res.send('Invalid password')
                };
            });
        }else {
            res.send('Invalid email')
        };
    });
};


/*  async function f(){
    console.log(userData[i]['password'])
    let checkP = await bcrypt.compare(req.body.password, userData[i]['password'])
    console.log(checkP)
    if(checkP) {
        let dataForToken = {
            email: req.body.email,
            password: req.body.password
        };
        let token = jwt.sign(dataForToken, process.env.SECRET_KEY)
        res.send(`User login succesfully. 
        token:${token}`)
    }else{
        res.send('Invalid password')
    }
}f()
*/