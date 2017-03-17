//define schema for db table
//will need a db to connect to
const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/tripplanner');

//this is where we create our tables in our db

//create an object with the schema we want
var venue = {
  //go here!!
}

//create the model name by defining the object we've just created as a sequelize Table.
var Place = db.define('Place', venue);

module.exports = Place;
