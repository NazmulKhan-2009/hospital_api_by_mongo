require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connection=require('./db.con');
const app=express();
const port=5000 ||  process.env.PORT 
const hospitalRoute=require('./src/router/hospitalData');
const doctorRoute=require('./src/router/doctorRouter')

connection()


app.use(express.json({limit: '600kb'}));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/hospital',hospitalRoute);
app.use('/doctor',doctorRoute);









app.get('/',(req,res)=>{
 res.send(`<h1>Welcome to the doctor care REST API at ${new Date().toLocaleDateString()}</h1>`)
})
app.listen(port,()=>console.log(`Server Ready from ${port}`))