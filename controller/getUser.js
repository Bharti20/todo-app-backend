const knex = require('../dbConnection/connection')
module.exports.getUsers = (req, res) => {
    knex.select('*').from('users').then((allUsers) => {
        res.send(allUsers)
    }).catch((err) => {
        res.send(err)
    });
};