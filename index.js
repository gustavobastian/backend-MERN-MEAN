const express = require('express');
const router = require('express-router');
require('dotenv').config({ encoding: 'latin1' })
const cookieParser = require('cookie-parser')
var cors = require('cors');
var corsOptions={origin:'*' , optionsSuccessStatus:200};


var PORT    = process.env.PORT_LOCAL;
const DBConnect= require('./config/db')

const app=express();

app.use(express.json());



// to parse application/json
app.use(express.json()); 
// to serve static files
app.use(cookieParser())
//for letting api to work with cors
app.use(cors(corsOptions));

//configuring cors for sending credentials at login
// to parse received data
var bodyParser = require('body-parser');
const { request } = require('express');


app.get('/',(req, res  )=>{
    res.send("<h1>NOT ALLOWED</h1>")
})
//routes
app.use('/api/user',require('./routes/users.js'));
app.use('/api/images',require('./routes/images.js'));



DBConnect();
module.exports =  app.listen(PORT, (req,res)=>{
    console.log("backend running on port:"+PORT);        
})

