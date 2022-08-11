const mongoose = require ("mongoose");
import Courses from "./Courses";

//Defining the model for the user
const UniversitySchema = new mongoose.Schema({

    name: {
        type:String, 
        required:true
    },

    course: {
            type:Array[Courses], 
            required:true,
        }
});

module.exports = mongoose.model("University", UniversitySchema);