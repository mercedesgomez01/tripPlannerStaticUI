//define schema for db table
//will need a db to connect to
const Sequelize = require('sequelize');
var db = require('./index');

//testing connection:should not need this again
// db
//   .authenticate()
//   .then(function(err) {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(function (err) {
//     console.log('Unable to connect to the database:', err);
//   });

//this is where we create our tables in our db

//create an object with the schema we want
var hotel = {

  name:  {
    type: Sequelize.STRING,
    allowNull: false
  },

  num_start: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
// amenities (string of comma delimited items)
// not sure about how to define this model
  amenities: {
    type: Sequelize.STRING,
    }
};

//create the model name by defining the object we've just created as a sequelize Table.
var Hotel = db.define('Hotel', hotel);


module.exports = Hotel;
