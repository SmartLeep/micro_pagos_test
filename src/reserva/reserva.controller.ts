import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Query } from '@nestjs/common';
import { HabitacionService } from 'src/habitacion/habitacion.service';
import { ReservaDTO } from './dto/reserva.dto';
import { ReservaService } from './reserva.service';

@Controller('/api/v1/reserva')
export class ReservaController {
    constructor(private readonly reservaService:ReservaService,
        private readonly habitacionService:HabitacionService){

    }
    @Post()
    createHabitacion(@Body() reservaDTO:ReservaDTO){
        return this.reservaService.create(reservaDTO);
    }
    @Get()
    findAllHabitaciones(){
        return this.reservaService.findAll();
    }
    @Post('/habitacion/:habitacionId')
    async _addHabitacion(@Body() reservaDTO:ReservaDTO,@Param('habitacionId')habitacionId:string){
        const habitacion= await this.habitacionService.findOneHabitacion(habitacionId);
        if(!habitacion) 
            throw new HttpException('Habitacion no encontrada',HttpStatus.NOT_FOUND);
            return this.reservaService.addHabitacion(reservaDTO,habitacionId)
    }
}