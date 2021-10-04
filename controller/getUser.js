const knex = require('../dbConnection/connection')

//1.`ageMoreThan` - Integer. Default is 0. If this is given only users whose age is more than or equal to the given number will be shown.
let getAgeMoreThan = (req, res) => {
    let age = req.params.age
    knex('users').select('users.id', 'users.name', 'users.email', 'users.age', 'cities.city_id', 'cities.cityName' )
    .join('cities', 'users.cityId', '=', 'cities.city_id')
    .where('users.age','>=', age)
    .then((allUsers) => {
       let userArray = []
       let userObj = {}
        let i = 0
        while(i<allUsers.length) {
            var userData = {
                id: allUsers[i].id,
                name: allUsers[i].name,
                email: allUsers[i].email,
                age: allUsers[i].age,
                city: {
                    cityName: allUsers[i].cityName,
                    city_id: allUsers[i].city_id
                }
            }
            userArray.push(userData)
            i++
        }
        userObj['users'] = userArray
        res.send(userObj)
    }).catch((err) => {
        res.send(err)
    });
};

//2. `ageLessThan` - Integer. Default is 999. If this is not given only users whose age is less than or equal ot the given number will be shown.
let getAgeLessThan = (req, res) => {
    let age = req.params.age
    knex('users').select('users.id', 'users.name', 'users.email', 'users.age', 'cities.city_id', 'cities.cityName' )
    .join('cities', 'users.cityId', '=', 'cities.city_id')
    .where('users.age','<=', age)
    .then((allUsers) => {
       let userArray = []
       let userObj = {}
        let i = 0
        while(i<allUsers.length) {
            var userData = {
                id: allUsers[i].id,
                name: allUsers[i].name,
                email: allUsers[i].email,
                age: allUsers[i].age,
                city: {
                    cityName: allUsers[i].cityName,
                    city_id: allUsers[i].city_id
                }
            }
            userArray.push(userData)
            i++
        }
        userObj['users'] = userArray
        res.send(userObj)
    }).catch((err) => {
        res.send(err)
    });
};
//get by userId 
let getByUserId = (req, res) => {
    knex('users').select('users.id', 'users.name', 'users.email', 'users.age', 'cities.city_id', 'cities.cityName' )
    .join('cities', 'users.cityId', '=', 'cities.city_id')
    .where({id: req.params.id})
    .then((allUsers) => {
       let userArray = []
       let userObj = {}
        let i = 0
        var userData = {
            id: allUsers[i].id,
            name: allUsers[i].name,
            email: allUsers[i].email,
            age: allUsers[i].age,
            city: {
                cityName: allUsers[i].cityName,
                city_id: allUsers[i].city_id
            }
        }
        userArray.push(userData)
        userObj['users'] = userArray
        res.send(userObj)
    }).catch((err) => {
        res.send(err)
    });
};



module.exports ={
    getAgeMoreThan,
    getAgeLessThan,
    getByUserId
}