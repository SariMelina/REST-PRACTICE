const express = require ('express')
const clients = express.Router()


clients.post('/clients', (req, res)=>{
    let {body} = req
    return res.status(200).send({
        status: 200,
        msg : "Jaló el post de clients",
        data: body
    })
})

clients.get('/clients' , (req, res)=>{
    return res.status(200).send({
        status: 200,
        msg : "Jaló el get"
    });
});

module.exports = clients;