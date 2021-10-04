const knex = require('../dbConnection/connection')

let createTodos = (req, res) => {
    let todasData = {
        text: req.body.text,
        assignedTo: req.body.assignedTo,
        dueDate: req.body.dueDate
    }
    knex('todos').insert(todasData).then(() => {
        res.send('todos created')
    }).catch((err) => {
        res.send(err)
    });
};

module.exports = {
    createTodos
}