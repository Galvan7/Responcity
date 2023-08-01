const mongoose=require("mongoose");
const UserOTPVerificationSchema=new mongoose.Schema({
    userId:{
        type:String,
    },
    email:{
        type:String,
        required:true
    },
    otp:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        required:true
    },
    expiresAt:{
        type:Date,
        required:true
    }


});

const UserOtpVerification=new mongoose.model(
    "UserOtpVerification",
    UserOTPVerificationSchema
);
module.exports=UserOtpVerification;