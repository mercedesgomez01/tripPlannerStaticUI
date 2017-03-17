const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/tripplanner');

// var Place = require('./place');
// var Hotel = require('./hotel');


//this is where we define relations and associations btwn place and hotel
module.exports = db;


//extra notes: I don't need to require pg or pghstore anywhere, sequelize knows to use it if it's installed.
