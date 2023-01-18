const User = require('../models/User.js');

exports.createUser = (req,res)=>{
    try {
        const localUser = JSON.parse(req.body);
        console.log(localUser);
        //res.send(localUser.code)
        res.send("<h1>user created</h1>")
        }catch(e){
            console.log(e);
            res.status(500).send("There was an error creating user")
        }
}

exports.getUser = async (req,res)=>{
    try {
    const code = req.params.id;
    console.log(code);
    const localUser = await User.findOne();
    console.log(localUser.password);
    res.send(localUser.code)
    }catch(e){
        console.log(e);
        res.status(500).send("There was an error getting user")
    }
}

exports.alterUser = (req,res)=>{    
    try {
        const code = req.params.id;
        console.log(code);        
        res.send("<h1>Alterado Gustavito</h1>");
        }catch(e){
            console.log(e);
            res.status(500).send("There was an error getting user")
        }    
}

exports.deleteUser = (req,res)=>{    
    try {
        const code = req.params.id;
        console.log(code);        
        res.send("<h1>borrando Gustavito</h1>")
        }catch(e){
            console.log(e);
            res.status(500).send("There was an error getting user")
        }
}