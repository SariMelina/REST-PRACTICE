const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const students = require('./routes/students.js')
require('dotenv').config()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/v1/students', students);

app.listen(process.env.PORT, () =>{
    console.log(`Server en el puerto ${process.env.PORT}`);
});