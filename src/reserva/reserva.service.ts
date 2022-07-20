import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from "mongoose";
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
        return await this.model.find();
    }
}
