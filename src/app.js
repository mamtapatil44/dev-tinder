const express = require("express");
const app = express();
const connectDB = require('./config/database')


connectDB().then(()=>{
    console.log("Db connection established")
    app.listen(3000,()=>{
      console.log("server starts listining")
  })
}).catch((err)=>{
    console.error("Db connection failed")
})


