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

    idHabitacion:{
        type:String,
        required:true
    },

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