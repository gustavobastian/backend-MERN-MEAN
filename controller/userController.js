const User = require('../models/User.js');

exports.createUser = (req,res)=>{
    
    const localUser = new User(req.body);
            
    if((localUser.mode == null)||
       (
        (localUser.mode != "publisher")&&
        (localUser.mode != "subscriber")&&
        (localUser.mode != "administrator")
       ))
       {
        console.log(e);
        res.status(500).send("There was an error creating user")
        return;
    }        

    localUser.save((err,localUser)=>{        
        if(err){
            console.log(err);
            res.send(err)
        }
        else{
            res.json({message:"user add:",localUser})
        }
    })
}

exports.createUserTest = (req,res)=>{
    console.log("postusertest")
        const localUser = new User(req.body);
        if((localUser.mode == null)||
           (
            (localUser.mode != "publisher")&&
            (localUser.mode != "subscriber")&&
            (localUser.mode != "administrator")
           ))
           {            
            res.status(500).send("There was an error creating user");
            return;
        }        

        localUser.save((err,localUser)=>{            
            if(err){             
                res.send(err)
            }
            else{
                res.json({message:"user add:",localUser})
            }
        })
}

exports.getUser = async (req,res)=>{   
    res.set('myParam', "holamundo");
    try {
    const codelocal = req.params.id;
    console.log(codelocal);
    const localUser = await User.findOne({code:codelocal})
    console.log(localUser.password);
    res.json(localUser)
    }catch(e){
        console.log(e);
        res.status(500).send("There was an error getting user")
    }
}

exports.getUserTest = async (req,res)=>{           
    try {
    const code = req.params.id;    
    const localUser = await User.findOne();
    console.log(localUser.password);
    res.json(localUser)
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
    User.deleteOne({_id:req.params.id}, (err, result)=>{
        res.json({ message: "User successfully deleted!", result });

    })
}