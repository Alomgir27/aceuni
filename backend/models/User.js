const mongoose = require ("mongoose");

//Defining the model for the user
const UserSchema = new mongoose.Schema({

    username: {
        type:String, 
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    occupation:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:false,
    },
    contribution:{
        type:Number,
        required:false,
    },
    mobile:{
        type:Number,
        required:false,
    },

});

module.exports = mongoose.model("User",UserSchema);