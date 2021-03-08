const mongoose = require("mongoose")

const usuario = mongoose.Schema({
    
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
    
})
//Collection
    mongoose.model("usuario",usuario)