const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
require("../models/usuario")
const usuario = mongoose.model("usuario")

router.get("/", (req, res) =>{
    res.render("admin/index")
})

router.get("/usuario", (req, res) =>{
    res.render("admin/usuario")
})

router.get("/usuario/add", (req, res) =>{
    res.render("admin/addusuario")
})

router.get("/Graficos",(req, res) =>{
    res.send("Paginas de grafico")
})

router.post("/usuario/novo",(req, res) => {
     const novousuario = {
         nome : req.body.nome,
         turma : req.body.turma,
         curso : req.boby.curso,
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