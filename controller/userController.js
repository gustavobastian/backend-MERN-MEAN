exports.createUser = (req,res)=>{
    res.send("<h1>user created</h1>")
}

exports.sendUser = (req,res)=>{
    res.send("<h1>Gustavito</h1>")
}

exports.alterUser = (req,res)=>{
    res.send("<h1>Alterado Gustavito</h1>")
}

exports.deleteUser = (req,res)=>{
    res.send("<h1>borrando Gustavito</h1>")
}