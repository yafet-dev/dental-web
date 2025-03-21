import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{              //The role is either 'admin' or 'superadmin'
        type:String,
        required:true
    }
});

const userModel = new mongoose.model('Users', userSchema);

export default userModel;