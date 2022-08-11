const mongoose = require ("mongoose");
import Document from "./Document";

//Defining the model for the user
const CoursesSchema = new mongoose.Schema({

    title: {
        type:String, 
        required:true,
    },
    document: {
        type: Array[Document],
        required: true
    }
});

module.exports = mongoose.model("Course", CoursesSchema);