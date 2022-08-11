const User = require ("../models/User");
const router = require ("express").Router();
// const AuthenticationController = require("../controllers/Authentication");
const Feedback = require("../models/Feedback");

//Router for handling user-registration:
// router.post("/register",AuthenticationController.register);
router.post("/signup",async (req,res)=>{
    
    //TODO: Error Handler for empty username and password
    const newUser = new User({
        username: (req.body.username).toLowerCase(),
        password: req.body.password,
        occupation: String(req.body.occupation).toLowerCase(),
        name: 'Acer',
        contribution: 0,
        mobile: 0
    });
    try{
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }catch(err){
        res.status(500).json(err);
    }


});

router.post("/login",async (req,res)=>{
    
    //TODO: Error Handler for empty username and password
    const username = String(req.body.username).toLowerCase();
    const password = req.body.password;
    
        if(!username || !password){
            res.status(402).json("Credentials has to be provided");
        }
    
        try{
            
            const user = await User.findOne({username:username})
            if(!user){
                res.status(401).json("User not found");
            }
            else if(user.password === password){
                res.status(201).json({
                    loginSuccess: true,
                    user:user
                })
            }
            else{
                res.status(401).json("Incorrect Password");
            }


            // user.comparedPassword(password,(err,good)=>{

                
            //     if(err){
            //         res.status(401).json("Wrong credentials");
            //         return;
            //     }
                
            //     res.status(201).json({
            //         loginSuccess: true,
            //         token:token.generateToken(user)
            //     });

            // })
    
    
        }catch(error){
            res.status(500).json(error);
        }

});

router.post("/feedback",async (req,res)=>{
    

    const feedback = new Feedback({
        feedback: req.body.feedback
    });

    try{
        const savedFeedback = await feedback.save();
        res.status(201).json(savedFeedback);
    }catch(err){
        res.status(500).json(err);
    }

});

module.exports =router;
