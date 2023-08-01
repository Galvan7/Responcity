const mongoose = require('mongoose');
const connectDB = async () => {
    try{
        const conn = await mongoose.connect("mongodb+srv://amangoswami2k3:lTWTZa4vs2li1lGy@cluster0.27mbe8f.mongodb.net/RESPONCITY",{
            useNewUrlParser: true,
        });
        console.log(`MongoDB connected `);
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }
}
module.exports = {connectDB};