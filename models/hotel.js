//define schema for db table
//will need a db to connect to
const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/tripplanner');

//testing connection:
db
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

//this is where we create our tables in our db

//create an object with the schema we want
var bed = {
  //sleep here!
}

//create the model name by defining the object we've just created as a sequelize Table.
var Hotel = db.define('Hotel', bed);

Hotel.sync({force: true}).then(function () {
  // Table created
  return Hotel.create({
    //fields
  });
});

module.exports = Hotel;
