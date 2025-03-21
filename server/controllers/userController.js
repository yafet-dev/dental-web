import userModel from '../models/userModel.js';
import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


//Registers a new user but only if the user is a superadmin
//The password will be encrypted
export async function register(req, res){
    const {name, email, password, role} = req.body;
    const data = await userModel.find({email:email});
    if(verifyUser(req.cookies.token)){  //Checking if the user is a superadmin
        if(data.length > 0){
            res.json({type:"Error", message:"A user with this email already exists, try another one"})
        }
        else{
            const encryptedPassword = await bcrypt.hash(password, 12); //Encrypting the password
            await userModel.create({    //User is added to the database
                name:name, 
                email:email, 
                password:encryptedPassword, 
                role:role
            })
            .then((result)=>{
                //console.log(result); 
                res.json({type:"Success", message:"User registered successfully!"})})
            .catch((error)=>{res.json({type:"Error", message:error})})
        }
    }
    else{
        res.json({type:"Error", message:"Permission Denied!"});
    }
}

//Allows a user to login using their email and password
export async function login(req, res){
    const {email, password} = req.body;
    //console.log(req.body)
    const data = await userModel.find({email:email});   //Checking if a user with the same email exists
    if(data.length === 0){
        res.json({type:"Error", message:"The user does not exist"})
    }
    else{
        if(data[0].password){
            bcrypt.compare(password, data[0].password, function(error, response){   //Checking if the password is correct
                if(error){
                    res.json({type:"Error", message:"Wrong password was provided"})
                }
                else{
                    const user = {email:data[0].email, name:data[0].name, role:data[0].role}
                    const token = jwt.sign(user, process.env.SECRET_KEY, {expiresIn:"1h"});
                    res.cookie('token', token, { httpOnly: true }); //Sends a token to show that the user is authenticated
                    res.json({type:"Success", message: token})
                }
            })
        }
    }
}

//Logs out the user by clearing the token in the cookies
export function logout(req, res){
    res.clearCookie('token');
    res.json({type:"Success", message: "Logged out successfully"});
}

//Decrypts the token and checks if the role of the user is superadmin
async function verifyUser(token){
    const verification = await jwt.verify(token, process.env.SECRET_KEY, function(error, decoded){
        if(error){
            return false;
        }
        else{
            if(decoded.role !== "superadmin"){
                return false;
            }
            return true;
        }
    });
}