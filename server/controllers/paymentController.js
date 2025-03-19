import customerModel from '../models/customerModel.js'
import mongoose from 'mongoose';

export async function addPayment(req, res){
    const id = new mongoose.Types.ObjectId(req.params.id);
    const dateToday = new Date(Date.now()).toISOString().toString();
    const newRecord = {paymentAmount: req.body.paymentAmount, date: dateToday, updatedBalance: req.body.updatedBalance};
    await customerModel.findById(id.toString())
    .then(async (result)=>{
        const newArray = Array.from(result.paymentRecord).concat([newRecord]);
        await customerModel.updateOne({_id:id},{paymentRecord: newArray})
        .then((result2)=>{res.json({type:"Success", message:result2})})
        .catch((err)=>{res.json({type:"Error", message:err})})
    })
    .catch((err)=>{res.json({type:"Error", message:err})})
}

export async function getPayment(req, res){
    const id = req.params.id;
    await customerModel.findById(id)
    .then((result)=>{
        res.json({type:"Success", message:result.paymentRecord})
    })
    .catch((err)=>{res.json({type:"Error", message:err})})
}