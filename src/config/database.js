

const mangooes = require("mongoose");
const connectDB = async ()=>{
   await mangooes.connect("mongodb+srv://mamtanodejs:Q9PyNYz6mIXpxAIa@cluster0.tct8f.mongodb.net/devTinder")
}


module.exports = connectDB;