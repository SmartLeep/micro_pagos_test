import * as mongoose from 'mongoose'
export const ReservaSchema = new mongoose.Schema({

    idCliente:{
        type:String,
        required:true
    },

    fechaIngreso:{
        type:Date,
        required:true
    },

    fechaSalida:{
        type:Date,
        required:true
    },

    habitacion:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'habitacion',
        autopopulate: true
        
    }],

    montoTotal:{
        type:String,
        required:true
    },

    cantidadPersonas:{
        type:Number,
        required:true
    }

},{
    timestamps: true
});