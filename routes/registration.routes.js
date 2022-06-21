const express = require ('express')

 
const{getAllRegister,createRegister,getRegisterById, updateRegister,deleteRegister}=require('../controllers/registration.controller')

const { Register } = require("../models/regitration.model");

const registerRouter=express.Router()

registerRouter.get('/',getAllRegister)

registerRouter.post('/',createRegister)

registerRouter.get('/:id', getRegisterById);

registerRouter.patch('/:id',updateRegister)

registerRouter.delete('/:id',deleteRegister)

module.exports={registerRouter}