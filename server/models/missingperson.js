const mongoose=require("mongoose")
const MissingpersonSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        age: {
            type:String,
            max:2,
            required:true,
        },
        place: {
            type: String,
            max:50,
            required:true
        },
        aadhar: {
            type: String,
            required: true,
            maxlength: 12,
            unique:true
        },
        description: {
            type: String,
            max:200,
            required: true
        },
        personreporting: {
            type: String,
            required: true,
        },
        found: {
            type:Boolean,
            default: false
        },        
    },
    {
        timestamps:true,
    }
)
const Missingperson = mongoose.model("Missingperson",MissingpersonSchema)
module.exports = Missingperson