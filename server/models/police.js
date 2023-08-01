const mongoose = require("mongoose")
const validator = require("validator")
const PoliceSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            max:50,
            unique: true,
            validate(value){
                if (!validator.isEmail(value)) {
                    throw new Error("not valid email address")
                }
            }
        },
        serviceNumber: {
            type: String,
            required: true,
            maxlength: 10,
            unique:true
        },
        rank: {
            type: String,
            required: true,
            maxlength: 50,
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
    },
    {timestamps: true}
)
const Police = mongoose.model("Police", PoliceSchema)
module.exports = Police;