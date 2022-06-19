const { DATE } = require('sequelize');
const {db,DataTypes}=require('../utils/database.utils')


const Register=db.define(registration, {

id:{
    primaryKey: true,
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
         },
entranceTime:{
			type:DATE,
			allowNull:false,
          },
exitTime:{
			type:DATE,
			allowNull:false,
    },
 status: {
		type: DataTypes.STRING,
		allowNull: false,
		defaultValue: 'working',
	},

})



module.exports = {Register };