const mongoose =require('mongoose')
const Schema= mongoose.Schema

let ordenSchema=new Schema({
    id: {
        type:Number,
        required:true
    },
    fecha: {
        type:Date,
        required:true
    },
    ciudadEntrega: {
        type:String,
        required:true
    },
    direccionEntrega: {
        type:String,
        required:true
    },
    estado: {
        type:String,
        required:true
    },
    hora: {
        type:Date,
        required:true
    },
    ciudadOrigen: {
        type:String,
        required:true
    },
    peso: {
        type:Number,
        required:true
    },
    ancho: {
        type:Number,
        required:true
    },
    largo: {
        type:Number,
        required:true
    },
    alto: {
        type:Number,
        required:true
    },
    direccionOrigen: {
        type:String,
        required:true
    },
    nombreDestinatario: {
        type:String,
        required:true
    },
    ccDestinatario: {
        type:String,
        required:true
    },
    userid: {
        type:Schema.Types.ObjectId, ref:'User'
    },
    
},{
    collection:'ordenes'
})
module.exports=mongoose.model('orden', ordenSchema)