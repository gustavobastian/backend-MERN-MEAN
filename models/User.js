const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {    
        type: String,
        required: true
    },
    mode : {
        type: String,
        require: true
    },
    contact : { 
        type: String,
        require: false
    },
    code : { 
        type: String,
        require: true
    }

});

module.exports = mongoose.model('User',userSchema)