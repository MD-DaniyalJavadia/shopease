import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../Models/Users.js';

const router =express.Router();

router.post('/register',async(req,res)=>{
    const {UserName,UserEmail,UserPassword}=req.body
    const hashed=await bcrypt.hash(UserPassword,10)
    const newUser = new User({UserName,UserEmail,UserPassword:hashed});
    await newUser .save();
    res.status(201).send("User Registerd Successfully!!")
})

router.post('/login',async(req,res)=>{
    const {UserEmail,UserPassword}=req.body
    const newUser=await User.findOne({UserEmail})
    if(!newUser||! await bcrypt.compare(UserPassword,newUser.UserPassword)){
        return res.send("Invalid Credentials")
    }
    res.status(200).send("User Login")
})
router.get('/users',async(req,res)=>{
    const newUser= await User.find();
    res.json(newUser)
})

export default router;