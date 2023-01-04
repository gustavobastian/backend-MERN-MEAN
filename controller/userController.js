const User = require('../models/User');
exports.createUser = async (req,res)=>{
    
    try {
        let user;
        user = new User(req.body);        
        await user.save();
        res.send(user).status(200)
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
    }

exports.sendUser = async (req,res)=>{
    res.send("<h1>Gustavito</h1>");
}

exports.sendAllUser = async (req,res)=>{
    try {
        const user = await User.find();        
        res.send(user).status(200);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }    
}

exports.alterUser = async (req,res)=>{

    try {

        const {username, password, mode, contact}= req.body;
        let user = await User.findById(req.params.id);

        if(!user){
            res.status(404).json({msg:'user not found'});
        }
        else {
            user.password = password;
            user.username = username;
            user.mode = mode;
            user.contact = contact;
            await User.findOneAndUpdate({_id:req.params.id},user, {new:true});
            res.send(user).status(200);
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }    
}

exports.deleteUser = async (req,res)=>{
    try {
        let user = await User.findById(req.params.id);
        if(!user){
            res.status(404).json({msg:'user not found'});
        }
        else{
            await User.findOneAndRemove({_id:req.params.id});
            res.json({msg:"user deleted"})
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }    
}