//Carregando modulos
   const express = require ("express")
   const handlebars = require ("express-handlebars")
   const bodyParser = require ("body-parser")
   const app = express()
   const admin = require("./routers/admin")
   const path = require("path")
   const mongoose = require ("mongoose")

//Configurações
   //body-parser
     app.use(bodyParser.urlencoded({extended:true}))
     app.use(bodyParser.json())
   //handlebars
     app.engine('hamndlebars',handlebars({defaultLayout: 'main'}))
     app.set('view engine','handlebars');
   //mongoose
     mongoose.Promise = global.Promise;
     mongoose.connect("mongodb://localhost/dadosb").then(() => {
         console.log("CONECTADO")
     }).catch((err) => {
        console.log('erro; ' + err)
     })
   //public
     app.use (express.static(path.join(__dirname,"public")))  
//Rotas
   app.use("/admin", admin)
//Outros
const PORT = 3001
app.listen(PORT,() => {
     console.log("SERVER OK!")
})