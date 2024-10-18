const express = require("express");
const app = express();
const connectDB = require('./config/database')
const User = require('./models/user')


app.post('/signup' ,async(req,res)=>{
  const userObj ={
    fistName :"mamta",
    lastName :"patil",
    emailId :"mp@gmail.com",
    password :"Mamta@123"
  }
  const user = new User(userObj)
  try{
    await user.save();
    res.send("User saved SUccessfully !!!!!!!!")
  } catch{
    res.status(400).send("Error while saving user......")
  }
})



connectDB().then(()=>{
    console.log("Db connection established")
    app.listen(3000,()=>{
      console.log("server starts listining")
  })
}).catch((err)=>{
    console.error("Db connection failed")
})


