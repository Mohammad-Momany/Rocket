const express = require('express');
const { register, login, getUsers , addTrip, allTrip ,putTrip} = require('./controller');

const middleware = require('./middlewares');

const authRouter = express.Router();

authRouter.get('/', async (req, res) => {
  res.json(await getUsers());
});

authRouter.get('/protected', middleware, (req, res) => {
  // res.json('Hello World');
  res.json(['ali','khalil']);
});

authRouter.post('/register', async (req, res) => {
  try {
    res.json(await register(req.body));
  } catch (err) {
    throw err;
  }
});

authRouter.post('/login', async (req, res) => {
  try {
    res.json(await login(req.body));
  } catch (err) {
    throw err;
  }
});

authRouter.post('/add',async(req,res) => {
    try {
        res.json(await addTrip(req.body));
      } catch (err) {
        throw err;
      }
})
authRouter.get('/all',async(req,res) => {
    try {
        res.json(await allTrip(req.body));
      } catch (err) {
        throw err;
      }
})
authRouter.put("/put/:id/email",async (req,res)=>{
    try {
     const  id = req.params.id
     const  email = req.body.email
     const place= req.body.place
     
        // how to passd trip id => req.params.id
        // how to pass or get the user email ()who want to edit_
        res.json(await putTrip(id,place,email));
      } catch (err) {
        throw err;
      }
})
 
module.exports =authRouter
