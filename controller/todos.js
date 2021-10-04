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
//get my Todos 
let getMyTodos = (req, res) => {
    knex('users').select('users.id', 'users.name', 'users.email', 'users.age', 'cities.city_id', 'cities.cityName', 'todos.text', 'todos.dueDate' )
    .join('cities', 'users.cityId', '=', 'cities.city_id')
    .join('todos', 'users.id', '=', 'todos.assignedTo')
    .then((allTodos) => {
        let userArray = []
        let userObj = {}
         let i = 0
         while(i<allTodos.length) {
             var userData = {
                 text: allTodos[i].text,
                 assignedTo: {
                    id: allTodos[i].id,
                    name: allTodos[i].name,
                    email: allTodos[i].email,
                    age: allTodos[i].age,
                    city: {
                        cityName: allTodos[i].cityName,
                        city_id: allTodos[i].city_id
                    }
                 },
                 dueDate: allTodos[i].dueDate 
             }
             userArray.push(userData)
             i++
        }
         userObj['todos'] = userArray
         res.send(userObj)
    }).catch((err) => {
        res.send(err)
    });
};



module.exports = {
    createTodos,
    getMyTodos
}