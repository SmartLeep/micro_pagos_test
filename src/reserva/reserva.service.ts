import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Date, Model} from "mongoose";
import { IReserva } from 'src/commons/interfaces/reserva.interface';
import { RESERVA } from 'src/commons/models/reserva.model';
import { ReservaDTO } from './dto/reserva.dto';

@Injectable()
export class ReservaService {
    constructor(@InjectModel(RESERVA.name) private readonly model:Model<IReserva>){

    }
    async create(reservaDTO:ReservaDTO):Promise<IReserva>{
        const newHabitacion=  new this.model(reservaDTO);
        
        return await newHabitacion.save();
    }
    async findAll():Promise<IReserva[]>{
        const reserva = await this.model.find();
       
        return await this.model.find();
    }

    async addHabitacion(reservaDTO:ReservaDTO,idHabitacion:string):Promise<IReserva>{
        reservaDTO.habitacion=idHabitacion;
        const newHabitacion=  new this.model(reservaDTO);
        
        await newHabitacion.populate("habitacion");
        return await newHabitacion.save();
    }
    async findReservaHabitacion(check_in:Date,check_out:Date,):Promise<IReserva[]>{
        console.log("Fecha de entrada",check_in);
        console.log("Fecha Salida",check_out);
        return await this.model.find({$and:[
            {fechaIngreso: {$gte: check_in}},
            {fechaSalida:{$lte: check_out}}
           ]})

    }
}
