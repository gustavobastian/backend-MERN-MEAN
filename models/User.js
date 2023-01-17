const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: string,
        required: true
    },
    password: {    
        type: string,
        required: true
    },
    mode : {
        type: string,
        require: true
    },
    contact : { 
        type: string,
        require: false
    }

});

module.exports = mongoose.model('User',userSchema)