global.TextEncoder = require("util").TextEncoder; global.TextDecoder = require("util").TextDecoder;

const mongoose = require('mongoose');
require('dotenv').config()
mongoose.set("strictQuery", false);


const dbConnect = async () => {
    
    try{
        await mongoose.connect(process.env.DB_MONGO,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log("db connected")

    }catch(e){
        console.log(e);
        process.exit(1);
            }

}

module.exports = dbConnect;