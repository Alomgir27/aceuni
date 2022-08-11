const mongoose = require ("mongoose");

//Defining the model for the user
const FeedbackSchema = new mongoose.Schema({

    feedback: {
        type:String, 
        required:true,
    }
});

module.exports = mongoose.model("Feedback",FeedbackSchema);