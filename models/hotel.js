//define schema for db table
//will need a db to connect to
const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/tripplanner');

//this is where we create our tables in our db

//create an object with the schema we want
var bed = {
  //sleep here!
}

//create the model name by defining the object we've just created as a sequelize Table.
var Hotel = db.define('Hotel', bed);
module.exports = Hotel;
