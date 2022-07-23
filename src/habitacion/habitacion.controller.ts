import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { Date } from 'mongoose';
import { check } from 'prettier';
import { ReservaService } from 'src/reserva/reserva.service';
import { HabitacionDTO } from './dto/habitacion.dto';
import { HabitacionService } from './habitacion.service';

@Controller('api/v1/habitacion')
export class HabitacionController {
    constructor(private readonly habitacionService:HabitacionService,
       
        
        ){

    }
    @Post()
    createHabitacion(@Body() habitacionDTO:HabitacionDTO){
        return this.habitacionService.create(habitacionDTO);
    }
    @Get()
    findAllHabitaciones(){
        return this.habitacionService.findAll();
    }
 
    
}