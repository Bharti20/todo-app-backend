const { response } = require('express');

require('dotenv').config()
const knex = require('knex')({
    client: 'mysql',
    connection: {
        user: 'root',
        host: process.env.HOST,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    }
})
knex.schema.hasTable('users').then((exists) => {
    if(!exists) {
        knex.schema
        .createTable('users', (table) => {
            table.increments('id')
            table.string('name')
            table.string('email')
            table.string('password')
            table.integer('age')
            table.integer('cityId')
        })
        .createTable('cities', (table) => {
            table.increments('city_id')
            table.string('cityName')
        })
        .createTable('todos',(table) => {
            table.string('text').notNull()
            table.integer('assignedTo').notNull()
            table.date('dueDate').notNull()
        })
        .then(() => {
            console.log('Database connected')
        }).catch((err) => {
            console.log(err)
        });
     }else{
        console.log('Table has created')
     };

});


module.exports = knex
