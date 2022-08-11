const mongoose = require ("mongoose");

//Defining the model for the user
const DocumentSchema = new mongoose.Schema({
            title: {
                type: String, 
                required:true,
            },
            code: {
                type : Number,
                required: true
            },
            university:{
                type: String, 
                required:true,
            },
            Coursedescription: {
                type: String, 
                required:true,
            },
            file:
            {
                data: Buffer,
                contentType: String,
                required: false
            }

});

module.exports = mongoose.model("MaterialDocument",DocumentSchema);