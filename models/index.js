const Sequelize = require('sequelize');
const db = require('./db')

var Place = require('./place');
var Hotel = require('./hotel');
var Activity = require('./activity');
//var Restaurant = require('./restaurant');


// put associations here...
//
//
Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);