require('dotenv').config()
const knex = require('knex')({
    client: 'mysql',
    connection: {
        user: 'root',
        host: 'localhost',
        password: process.env.PASSWORD,
        database: 'todo_app'
    }
})
// knex.schema
// .createTable('users', (table) => {
//     table.increments('id')
//     table.string('name')
//     table.string('email')
//     table.string('password')
//     table.integer('age')
//     table.integer('cityId')
// })
// .createTable('cities', (table) => {
//     table.increments('id')
//     table.string('cityName')
// })
// .then(() => {
//     console.log('Database connected')
// }).catch((err) => {
//     console.log(err)
// });

module.exports = knex
