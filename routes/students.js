const express = require ('express')
const clients = express.Router()
const ctrClients = require('../controllers/students.js')

clients.post('/', (req, res)=>{
    let {body} = req
    let status = 201
    let msg = "Nuevo registro"
    let ok = ctrClients.postStudent(body)
    if(ok === false){
        status = 401
        msg = "Datos invalidos"
    }
    return res.status(status).send({
        status: status,
        msg : msg
    })
})

clients.get('/' , (req, res)=>{
    return res.status(200).send({
        status: 200,
        msg : "Jaló el get"
    });
});

module.exports = clients;