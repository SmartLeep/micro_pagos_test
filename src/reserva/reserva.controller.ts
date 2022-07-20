import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ReservaDTO } from './dto/reserva.dto';
import { ReservaService } from './reserva.service';

@Controller('/api/v1/reserva')
export class ReservaController {
    constructor(private readonly reservaService:ReservaService){

    }
    @Post()
    createHabitacion(@Body() reservaDTO:ReservaDTO){
        return this.reservaService.create(reservaDTO);
    }
    @Get()
    findAllHabitaciones(){
        return this.reservaService.findAll();
    }
}