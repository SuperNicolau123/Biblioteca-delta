const mongoose = require("mongoose")
const usuario = mongoose.usuario;
   
const usuario = usuario({
    
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
    date:{
        type : Date,
        default: Date.now
    },
    time:{
        type : Time,
        default: Time.now
    }
    
})
//Collection
    mongoose.model("usuario",usuario)