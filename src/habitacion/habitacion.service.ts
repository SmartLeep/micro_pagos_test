import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IHabitacion } from 'src/commons/interfaces/habitacion.interface';
import { HABITACION } from 'src/commons/models/reserva.model';

import { HabitacionDTO } from './dto/habitacion.dto';

@Injectable()
export class HabitacionService {
    constructor(@InjectModel(HABITACION.name) private readonly model:Model<IHabitacion>){

    }
    async create(habitacionDTO:HabitacionDTO):Promise<IHabitacion>{
        const newHabitacion=  new this.model(habitacionDTO);
        return await newHabitacion.save();
    }
    async findAll():Promise<IHabitacion[]>{
        return await this.model.find();
    }
    async findFilterHabitacion(state:string,capacity:number):Promise<IHabitacion[]>{
        return await this.model.find({$and:[{state:state},{capacity:capacity}]})
    }
    async findOneHabitacion(idHabitacion:string):Promise<IHabitacion>{
        return await this.model.findById(idHabitacion);
    }
}
