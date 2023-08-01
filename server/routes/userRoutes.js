const express=require('express');
const router=express.Router();
const {registerUser,loginUser,userOTP,resendUserOTP}=require('../controllers/userController');
const {getAllMissingPerson} = require("../controllers/missingperson")
const {getFir} = require("../controllers/fir")
router.post('/register',registerUser);
router.post('/login',loginUser);
router.post('/verifyOtp',userOTP);
router.post('/resendOtp',resendUserOTP);
router.get('/getmissing',getAllMissingPerson)
router.get('/getfir',getFir)
module.exports=router;