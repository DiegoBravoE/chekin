const {Sequelize,DataTypes}=require('sequelize')

const db = new Sequelize({
    dialect: 'postgres',
	host: 'localhost',
	username: 'postgres',
	password: 'pass1234',
	port: 5432,
	database: 'register',
})
db.authenticate()
.then(()=>console.log("base de datos autentiada"))
.catch (err=>console.log(err))

db.sync()
.then(()=>console.log("base de datos creada"))
.catch (err=>console.log(err))


module.exports={db,DataTypes}