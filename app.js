const express = require('express');

const { registerRouter } = require('./routes/registration.routes');

const {db}=require('./utils/database.utils')
//iniciar express app
const app= express()


app.use(express.json())

app.use('/registration',registerRouter)

db.authenticate()
	.then(() => console.log('Db authenticated'))
	.catch(err => console.log(err));

db.sync()
	.then(() => console.log('Db synced'))
	.catch(err => console.log(err));

app.listen(3000, () => {
	console.log('Express app running!!');
});