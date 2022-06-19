const express = require ('express')

 
const{getAllRegister}=require('../controllers/registration.controller')


const registerRouter=express.Router()

registerRouter.get('/',getAllRegister)




module.exports={registerRouter}