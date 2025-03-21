import mongoose from "mongoose";

const medicalSchema = new mongoose.Schema({
    examination:{
        type:String,
        required:true
    },
    management:{
        type:String,
        required:true
    },
    diagnosis:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    photo:{
        type:[String],
        required:true
    },
    customerId:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    }
});

const medicalModel = new mongoose.model("Medicals", medicalSchema);
export default medicalModel;