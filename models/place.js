//define schema for db table
//will need a db to connect to
const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/tripplanner');


//this is where we create our tables in our db
module.exports = Place;