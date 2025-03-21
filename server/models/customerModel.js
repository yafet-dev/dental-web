import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    cardNumber:{
        type:String,
        required:true
    },
    sex:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    firstPaymentAmount:{
        type:Number,
        required:true
    },
    registrationDate:{
        type:String,
        required:true
    },
    outstandingBalance:{
        type:Number,
        required:true
    },
    fullPaymentAmount:{
        type:Number,
        required:true
    },
    paymentRecord:{
        type:[Object], // the format will be {paymentAmount: , date: , updatedBalance: }
        required:true
    },
});

const customerModel = new mongoose.model("Customers", customerSchema);
export default customerModel;
