import * as mongoose from 'mongoose';
export const HabitacionSchema = new mongoose.Schema({
    
    capacity:{
        type:Number,
        required:true
    } ,
    
    description:{
        type:String,
        required:true
    } ,
    state:{
        type:String,
        default:"Libre",
        required:true
    } ,
    name:{
        type:String,
        required:true
    },
    numberBed:{
        type:Number,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    typeHabitacion:{
        type:String,
        required:true
    },
    urlPhoto:{
        type:String,
        required:true
    }
 
},{
    timestamps:true
});