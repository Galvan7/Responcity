const mongoose = require("mongoose")
const validator = require("validator")
const UserSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
        },
        email: {
            type: String,
            required:true,
            max:50,
            unique: true,
            validate(value){
                if (!validator.isEmail(value)) {
                    throw new Error("not valid email address")
                }
            }
        },
        aadhar: {
            type: String,
            required: true,
            maxlength: 12,
            unique:true
        },
        password: {
            type: String,
            required: true,
            min: 8,
        },
        cpassword: {
            type: String,
            required: true,
            min: 8,
        },
        verified: {
            type:Boolean,
            default: false
        }
    },
    {timestamps: true}
);
const User = mongoose.model("User", UserSchema)
module.exports = User;