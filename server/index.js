const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/tripplanner');

// const User = db.define('user', {
//   name: Sequelize.STRING,
//   pictureUrl: Sequelize.STRING
// },
// {
//   classMethods: {
//     findAllKates: function () {

//     }
//   }
// })

// User.sync({force: true})
//   .then(() => {
//     const person = User.build({
//       name: "Kate",
//       pictureUrl: "http://fillmurray.com/10/10"
//     });

//     return Promise.all([
//       person.save(),
//       User.create({
//         name: "Gabriel",
//         pictureUrl: "http://placekitten.com/10/10"
//       })
//     ]);
//   })
//   .then((arrayOfCreatedPeople) => {
//     console.log(arrayOfCreatedPeople[0].name);
//     return User.findAll();
//   })
//   .then((arrayOfAllPeoples)=> {
//     console.log('~~~~~~~~~~~~~')
//     console.log(arrayOfAllPeoples.length);

//export the db as the object
module.exports = db;


//extra notes: I don't need to require pg or pghstore anywhere, sequelize knows to use it if it's installed.
