const express = require("express")
const app = express()
app.use(express.json())
const mongoose = require("mongoose")
const dotenv = require("dotenv");
const { connectDB } = require("./databases/database");
const  cors = require("cors")
const userRoutes = require("./routes/userRoutes")
const policeRoutes = require("./routes/policeRoutes")
dotenv.config();
app.use(cors({
    "origin": "*",
    methods: "GET,POST,PUT,DELETE,PATCH",
    credentials: true,
}))
// app.get('/',(req,res)=>{
//     res.send("The world is a stage where every man must play a part!")
// })

app.use('/api/police',policeRoutes)
app.use('/api/users',userRoutes)

// serving frontend
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '../crime/build')));
console.log(path.join(__dirname, '../crime/build'))
app.get("*",function(req,res){
  res.sendFile(path.join(__dirname, '../crime/build', 'index.html'));
});
app.listen(5000, () => {
    console.log("Backend Server is running on port 5000")
})
connectDB();