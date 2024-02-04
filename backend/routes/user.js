const router = require('express').Router();
const User = require('../models/User');
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken") 


    //User Register API
    router.post('/register', async(req,res) =>{
      
            const newUser = new User ({
                username: req.body.username,
                email: req.body.email,
                //Using crypto js in the backend to hash the password.
                password: CryptoJS.AES.encrypt(req.body.password, 
                    process.env.PASS_SEC
                    ).toString(),   
            });
            try {
            const user = await newUser.save();
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json(error)
        }
    })


    //Login API
    router.post('/login', async(req,res) =>{
        try{
            //Finding user and if credentials are wrong sending request back.
            const user = await User.findOne({username: req.body.username});
            !user && res.status(400).json("Credentials are wrong");

            //Checking if the password is correct.
            const hashPassword = CryptoJS.AES.decrypt(
                user.password, 
                process.env.PASS_SEC
                );
            const password = hashPassword.toString(CryptoJS.enc.Utf8);
            password !== req.body.password && res.status(422).json("Incorrect Password")

            //Using JWT(Jason Web token) 
            const accesToken = jwt.sign({
                id: user._id , 
                
            //if user is admin he can do any CURD operations
                isAdmin: user.isAdmin,
             },
             process.env.JWT_SEC,
             {expiresIn:"5d"}
             )

           
            res.status(200).json({user, accesToken});
        }catch(error){
        res.status(500).json(error);
        }
    })
    module.exports = router ;