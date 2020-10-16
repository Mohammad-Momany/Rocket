// const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { users, roles ,trips} = require('./models');

const register = async (user) => {
  console.log('USER: ', user);

  

  if (savedUser.length === 0){
    
    const newUser = user;
   
    newUser.id = 2;
   
    newUser.password = await bcrypt.hash(
      user.password,
      Number(process.env.SALT)
    );
    
    users.push(newUser);
    
    return newUser;
    
  } else {
    
    return 'User already exists';
  }

};
const login = async (user) => {
  const savedUser = users.filter((u) => u.email === user.email);

  if (savedUser.length === 0) {
    return 'User Not Found please register';
  } else {
   
    if (await bcrypt.compare(user.password, savedUser[0].password)) {
     
      const savedPermission = roles.filter((p) => p.id === savedUser[0].role_id);

      const payload = {
        email: savedUser[0].email,
        permissions: savedPermission[0].permissions,
      };

      const options = {
        expiresIn: process.env.TOKEN_EXPIRATION,
      };
      
      return await jwt.sign(payload, process.env.SECRET, options);
      
    } else {
      return 'Username or password not correct';
    }
  }
};

const getUsers = () => {
  return users;
};

const addTrip = (trip)=>{
    trips.push(trip)
    return trips
}
 const allTrip=()=>{
     return trips
 }
 const putTrip = async (user)=>{
     if(!(users[0].email === trips[0].owner)){
         return "it isn't allowed for you"
     }
     if(users[0].email === trips[0].owner){
         
        return "it's allowed for you"
    }
 } 
module.exports = {
  register,
  login,
  getUsers,
  addTrip,
  allTrip,
  putTrip
};