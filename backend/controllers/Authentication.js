const User = require ("../models/User");
// const token = require("../middleware/token");
module.exports = {

    register : (req,res) =>{
    
        const newUser = new User({
            username: String(req.body.username).toLowerCase(),
            password: req.body.password,
            occupation: String(req.body.occupation).toLowerCase() 
        });

    console.log(newUser)
        newUser.save().then((user)=>{
            res.status(201).json({
                    success: true,
                    user: user
            }); 
        }).catch((err)=>{
            res.status(500).json("Error");   
        });
    },

    login : async(req,res) =>{

        const username = req.body.username;
        const password = req.body.password;
    
        if(!username || !password){
            res.status(402).json("Credentials has to be provided");
        }
    
        try{
            
            const user = await User.findOne({username:String(username).toLowerCase()})
            if(!user){
                res.status(401).json("User not found");
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
            res.status(201).json({
                loginSuccess: true,
                user:user
            });
    
        }catch(error){
            res.status(500).json(error);
        }
    
    }

}
