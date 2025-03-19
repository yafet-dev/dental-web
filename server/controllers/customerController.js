import customerModel from '../models/customerModel.js';
import mongoose from 'mongoose';

export async function register(req, res){
    const {name,
        cardNumber,
        sex,
        age,
        phoneNumber,
        firstPaymentAmount,
        outstandingBalance,
        fullPaymentAmount} = req.body;
    const dateToday = new Date(Date.now()).toISOString().toString();
    const paymentRecord = {paymentAmount: firstPaymentAmount, date: dateToday, updatedBalance: (fullPaymentAmount - firstPaymentAmount)}

    const response = await customerModel.find({cardNumber: cardNumber});
    if(response.length > 0){
        res.json({type:"Error", message: "Card number already assigned to another customer"})
    }
    else{
        await customerModel.create({
            name: name,
            cardNumber: cardNumber,
            sex: sex,
            age: age,
            phoneNumber: phoneNumber,
            firstPaymentAmount: firstPaymentAmount,
            registrationDate: dateToday,
            outstandingBalance: outstandingBalance,
            fullPaymentAmount: fullPaymentAmount,
            paymentRecord:[paymentRecord]
        })
        .then((result)=>{ res.json({type:"Success", message:"Customer registered successfully!"}); })
        .catch((err)=>{
            console.log(err); 
            res.json({type:"Error", message:err});
        })
    }
}

export async function getAll(req, res){
    await customerModel.find({})
    .then((result)=>{ res.json({type:"Success", message:result}); })
    .catch((err)=>{
        console.log(err); 
        res.json({type:"Error", message:err});
    });
}

export async function getCustomer(req, res){
    const id = req.params.id;
    await customerModel.findById(id)
    .then((result)=>{ res.json({type:"Success", message:result}); })
    .catch((err)=>{
        console.log(err); 
        res.json({type:"Error", message:err});
    });
}

export async function update(req, res){
    const id = new mongoose.Types.ObjectId(req.params.id);
    const {name,
        cardNumber,
        sex,
        age,
        phoneNumber,
        firstPaymentAmount,
        outstandingBalance,
        fullPaymentAmount,
        paymentRecord} = req.body;
    const dateToday = new Date(Date.now()).toISOString();
    const newRecord = {paymentAmount: req.body.paymentRecord.paymentAmount, date: dateToday, updatedBalance: req.body.paymentRecord.updatedBalance};
    const response = await customerModel.findById(id.toString())
    .then(async (result)=>{
        if(paymentRecord){
            const newArray = Array.from(result.paymentRecord).concat([newRecord]);
        await customerModel.updateOne({_id:id},{
            name: name,
            cardNumber: cardNumber,
            sex: sex,
            age: age,
            phoneNumber: phoneNumber,
            firstPaymentAmount: firstPaymentAmount,
            outstandingBalance: outstandingBalance,
            fullPaymentAmount: fullPaymentAmount,
            paymentRecord:newArray
        })
        .then((result)=>{ res.json({type:"Success", message:"Customer updated successfully!"}); })
        .catch((err)=>{
            console.log(err); 
            res.json({type:"Error", message:err});
        })
    }
    else{
        await customerModel.updateOne({_id:id},{
            name: name,
            cardNumber: cardNumber,
            sex: sex,
            age: age,
            phoneNumber: phoneNumber,
            firstPaymentAmount: firstPaymentAmount,
            registrationDate: registrationDate,
            outstandingBalance: outstandingBalance,
            fullPaymentAmount: fullPaymentAmount,
            paymentRecord: response.paymentRecord
        })
        .then((result)=>{ res.json({type:"Success", message:"Customer updated successfully!"}); })
        .catch((err)=>{
            console.log(err); 
            res.json({type:"Error", message:err});
        })
    }
    })
    .catch((err)=>{
        res.json({type:"Error", message: err});
 } )     
}

export async function deleteCustomer(req, res){
    const id = new mongoose.Types.ObjectId(req.params.id);
    await customerModel.deleteOne({_id:id})
    .then((result)=>{ res.json({type:"Success", message:"Customer deleted successfully"}); })
    .catch((err)=>{
        console.log(err); 
        res.json({type:"Error", message:err});
    });
}
