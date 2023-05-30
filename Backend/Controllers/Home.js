const users= require('../models/user')
const express = require('express');
const path = require("path");

const app = express();

//on register page
const addUser = async (req,res)=>{
try {
        console.log("creating");
        const user = await users.create(req.body);
        console.log(req.body,"created");
        res.status(201).json({user});
    
} catch (error) {
    res.status(500).json({msg:error})
}
}
//on login page
const searchUser =async(req,res)=>{
    try {
        console.log("searching");
        const {email,password} =req.body;
        console.log(email,", ,",password);

        

        const user = await users.findOne({email:email});
        
        console.log( user);
        // res.status(201).json({user});


        // await users.findone({email:email},(err,user)=>{
        //     if(err){
        //         console.log("not found");
        //         res.status(500).json({msg:error});
        //     }
        if(user === null){
            console.log("not found");

            res.status(422).json({msg:error});
        }
        else
        {
            if(password === user.password){
                console.log("found");
                res.status(201).json({user});
                //res.status(201).json({user});
                //res.send({message:"login sucess",user:user})
               }else{
                console.log("wrong pass");
                res.status(401).json({msg:error});
                //res.send({message:"wrong credentials"});
            }
            
        }

        // });
        

    
} catch (error) {
    console.log("error occured");

    res.status(500).json({msg:error})
}
}


//main page
const clickedTravel=(req,res)=>{
    res.send('Travel Page')
}
const clickedUploads=(req,res)=>{
    res.send('Uploads Page')
}
const clickedSignIn=(req,res)=>{
    res.send('Sign In Page')
    // app.use(express.static('./CLIENT/src/Login.jsx'));
    // app.use(express.static(path.join(__dirname, "../CLIENT/src")));

    // app.get("/Login", (req, res) => {
     // res.sendFile(path.join(__dirname, "../CLIENT/src/Login.jsx"));
    // });
    // app.use(express.static(path.join(__dirname, "..", "Login.jsx")));
    // app.use(express.static("./CLIENT/src/Login.jsx"));
}
const clickedRegister=(req,res)=>{
    // res.send('Register Page')
    res.send('Register Page')
  // res.render(path.join(__dirname, "..", "build"));
}
const clickedHotels=(req,res)=>{
    res.send('Hotels Page')
}
const clickedPlaces=(req,res)=>{
    res.send('Places Page')
}
const clickedWeather=(req,res)=>{
    res.send('Weather Page')
}
const clickedToDos=(req,res)=>{
    res.send("To Do's Page")
}
module.exports= {clickedHotels,clickedPlaces,clickedRegister,
    clickedSignIn,clickedToDos,clickedTravel,
    clickedUploads,clickedWeather,addUser,
    searchUser,}