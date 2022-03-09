const mongoose = require('mongoose');

user = new mongoose.Schema({
    name:{
        firstName:String,
        lastName:String
    },
    DoB:Date,
    userName:{
        type:String,
        unique:true,
        required:true
    },
    gender:Boolean,
    email:String,
    password:String,
    isAdmin:Boolean,
},
{timestamps: true}

);

module.exports = mongoose.model('user', user);

