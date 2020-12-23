const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
require("../models/usuario")
const usuario = mongoose.model("usuario")

router.get("/", (req, res) =>{
    res.render("../views/index.handlebars")
})

router.get("/usuario", (req, res) =>{
    res.render("../views/usuario.handlebars")
})

router.get("/usuario/add", (req, res) =>{
    res.render("../views/addusuario.handlebars")
})

router.get("/Graficos",(req, res) =>{
    res.send("Paginas de grafico")
})

router.post("/usuario/novo",(req, res) => {
     const novousuario = {
        nome : req.body.nome,
        turma : req.body.turma,
        curso : req.body.curso,
        numero : req.body.numero,
        atividade : req.body.atividade,
        date : req.body.date,
        time : req.body.time
     }

     new usuario(novousuario).save().then(()=>{
         console.log("registrado com sucesso")
     }).catch((err) => {
        console.log("erro: " + err)
     })
})

module.exports = router