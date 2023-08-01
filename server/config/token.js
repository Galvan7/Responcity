const jwt=require("jsonwebtoken");

const generateToken=(id)=>{
    return jwt.sign({id},"R88LgWZ5APxQv6J9OTKt4qszbBF3JgcGfs6cmRbEeGofdCj2VkZuhEID3T3nm2eMvlgCEAXkS3jr9Hx2CU4L0N8fx8iX41ioDR6y",{expiresIn:"7d"})
}

module.exports=generateToken;