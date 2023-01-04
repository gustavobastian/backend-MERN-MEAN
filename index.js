const express = require('express');
const router = require('express-router');
require('dotenv').config({ encoding: 'latin1' })
var PORT    = process.env.PORT_LOCAL;

const DBConnect= require('./config/db')

const app=express();

app.use(express.json());

DBConnect();

app.get('/',(req, res  )=>{
    res.send("<h1>NOT ALLOWED</h1>")
})
//routes
app.use('/api/user',require('./routes/users.js'));

app.listen(PORT, (req,res)=>{
    console.log("backend running")
})