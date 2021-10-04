const knex = require('../dbConnection/connection')
const bcrypt = require('bcrypt')
module.exports.signUp = async(req, res) => {
    let salt = 10;
    const password = req.body.password
    let hashPassword = await bcrypt.hash(password, salt)
    let userData = {
        name: req.body.name,
        email:req.body.email,
        password: hashPassword,
        age: req.body.age,
        cityId: req.body.cityId
    };
    knex('users').insert(userData).then(() => {
        res.send('User signup succesfully')
    }).catch((err) =>{
        res.send(err)
    });
};

