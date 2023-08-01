const express=require('express');
const router=express.Router();
const {registerPolice,loginPolice}=require('../controllers/policeController');
const {registerMissingperson,getAllMissingPerson,toggleFound} = require("../controllers/missingperson")
const {registerFir, updateCadre} = require("../controllers/fir")
router.post('/register',registerPolice);
router.post('/login',loginPolice);
router.post('/registermissing',registerMissingperson)
router.post('/registerfir',registerFir)
router.get('/getmissing',getAllMissingPerson)
router.put('/found/:id',toggleFound)
router.patch('/updateCadre/:id',updateCadre)
module.exports=router;