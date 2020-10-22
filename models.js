const mongoose = require("mongoose")




const tripeUser = new mongoose.Schema({
  place: { type: String, required: true},
  numOfPeople: { type: Number, required: true },
  price: { type: String, required: true },
  owner: { type: String, required: true }   
});


const tripeModel = mongoose.model('Tripe', tripeUser);
module.exports = {tripeModel};


































// const users = [
//     {
//       email: 'admin@gmail.com',
//       password: '$2b$10$ytNobitJZNo0WeuyEqG85.erwKBKaBtunsR.u2GKKG1zynsuUvv6C',
//       role_id: 1,
//     },
//     {
//       email: 'user2@gmail.com',
//       // 123456
//       password: '$2b$10$6tjuguXB.uejxRZz6syZ1O.aEK8EKf9kA/cnvZJ6mOs6cl0bSrnJ.',
//       role_id: 2,
//     },
//     {
//       email: 'user3@gmail.com',
//       // 123456
//       password: '$2b$10$6tjuguXB.uejxRZz6syZ1O.aEK8EKf9kA/cnvZJ6mOs6cl0bSrnJ.',
//       role_id: 2,
//     },
//   ];
  
//   const roles = [
//     {
//       id: 1,
//       type: 'admin',
//       permissions: ['r', 'w', 'u', 'd'],
//     },
//     {
//       id: 2,
//       type: 'user',
//       permissions: ['r', 'w','u','d'],
//     },
//   ];

// const trips = [
//   {
//     place:"Ajloun",
//     numOfPeople: 8,
//     price:"10JD",
//     owner:"admin@gmail.com",  
//     id:1
//   },
//   {
//     place:"Ajloun",
//     numOfPeople: 8,
//     price:"10JD",
//     owner:"user1@gmail.com",
//     id:2
//   },
//   {
//     place:"gggg",
//     numOfPeople: 8,
//     price:"10JD",
//     owner:"user2@gmail.com",
//     id:3
//   }
  
// ]

//   module.exports = {
//     users,
//     roles,
//     trips,
//   };
  