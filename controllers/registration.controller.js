const { DATE } = require("sequelize");
const { Register } = require("../models/regitration.model");

registration[
     {
        id:"",
        entranceTime:DATE,
        exitTime:DATE,
        status:"working"
     },
     {
        id:"",
        entranceTime:DATE,
        exitTime:DATE,
        status:"working"
     },
    ];




const getAllRegister = async (req, res) => {
  try {
    const registers = await Register.findAll();
    res.status(200).json({
      status: "working",
      registers,
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports = { getAllRegister };
