const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const clients = require('./routes/clients.js')
require('dotenv').config()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/v1/clients', clients);

app.listen(process.env.PORT, () =>{
    console.log(`Server en el puerto ${process.env.PORT}`);
});