import { Body, ConsoleLogger, Controller, Get, HttpException, HttpStatus, Param, Post, Query } from '@nestjs/common';
import { Date } from 'mongoose';
import { IHabitacion } from 'src/commons/interfaces/habitacion.interface';
import { IReserva } from 'src/commons/interfaces/reserva.interface';
import { HabitacionDTO } from 'src/habitacion/dto/habitacion.dto';
import { HabitacionService } from 'src/habitacion/habitacion.service';
import { ReservaDTO } from './dto/reserva.dto';
import { ReservaService } from './reserva.service';

@Controller('/api/v1/reserva')
export class ReservaController {
    habitaciones:HabitacionDTO[]=[]; 
    listaHabitacionesFiltrada:HabitacionDTO[]=[]
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
    @Get('habitacion/filter?')
    async FindFilterHabitaciones(
        @Query('capacity') capacity:number,
        @Query('check-in') check_in:Date,
        @Query('check-out') check_out:Date
    ){
       this.habitaciones=[];
       this.listaHabitacionesFiltrada=[];
        const listHabitacions= await this.habitacionService.findFilterHabitacion(capacity);
        const listHabitacionesReser= await this.reservaService.findReservaHabitacion(check_in,check_out)
      
        listHabitacionesReser.forEach(elemment=>{
            if(elemment["habitacion"][0]){
                this.habitaciones.push(elemment["habitacion"][0])
            }
           
        });
        await this.habitaciones.forEach(element=>{
            const idHabitacionReservada=element["name"]
            listHabitacions.forEach(element => {
                const habitaciones=element["name"];
                if(habitaciones==idHabitacionReservada){
                    const index=listHabitacions.indexOf(element);                  
                    listHabitacions.splice(index,1);
                }
            });
        })
       
        return listHabitacions;
    }
}