exports.createImage = (req,res)=>{
    res.send("<h1>image created</h1>")
}

exports.sendImage = (req,res)=>{
    res.send("<h1>Image Send</h1>")
}

exports.alterImage = (req,res)=>{
    res.send("<h1>Altering Images</h1>")
}

exports.deleteImage = (req,res)=>{
    res.send("<h1>Erasing images</h1>")
}