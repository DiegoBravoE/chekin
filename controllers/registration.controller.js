
const { Register } = require("../models/regitration.model");



const getAllRegister = async (req, res) => {
  try {
    const registers = await Register.findAll();
    
    res.status(200).json({
      status: "success",
      registers,
    });
  } catch (err) {
    console.log(err);
  }
};

const createRegister= async (req,res)=>{

  try { 
    const {entranceTime} = req.body;
    const newRegister =await Register.create({
    entranceTime:new Date(),
    
  })
  res.status(201).json({
status:'success',
newRegister,
  })  
  } catch (err) {
    console.log(err)
  }
};
 const getRegisterById= async(req,res)=>{
  const{id}=req.params;
  const register= await Register.findOne({where:{id}})
  if (!register) {
    return res.status(404).json({
      status:'error',
       message:'Register not found',
    })
  }
    res.status(200).json({
      status:'success',
      register,
    })
    
  }
 

module.exports = { getAllRegister,createRegister,getRegisterById };
