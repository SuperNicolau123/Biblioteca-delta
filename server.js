const mongoose = require('mongoose')

//configurando o mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/dadosb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})
.then(() => {
     console.log("ok")
}).catch((err) => {
    console.log("houve erro: " + err)
})

//configurando model usuario
//definindo o model
const usuarioSchema = mongoose.Schema({
    nome:{
       type : String,
       require : true
    },
    turma: {
        type : String,
        require : true
    },
    curso:{
        type : String,
        require : true
    },
    numero:{
        type : Number,
        require : true
    },
    atividade:{
        type : String,
        require : true
    },
    dia:{
        type : Date,
        require : true
    }
    
})
//Collection

    mongoose.model('usuario',usuarioSchema)

const novousuario = mongoose.model('usuario')

new novousuario({
    nome : "Luiz paulo",
    turma : "1dt",
    curso : "dev",
    numero : 20,
    atividade : "leitura",
    dia: "10/10/2020"
}).save().then(() => {
    console.log("ok")
}).catch((err) => {
    console.log("dead; " + err)
})
