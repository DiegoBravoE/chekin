const express = require ('express')

 
const{getAllRegister,createRegister,getRegisterById}=require('../controllers/registration.controller')

const { Register } = require("../models/regitration.model");

const registerRouter=express.Router()

registerRouter.get('/',getAllRegister)

registerRouter.post('/',createRegister)

registerRouter.get('/:id', getRegisterById);



module.exports={registerRouter}