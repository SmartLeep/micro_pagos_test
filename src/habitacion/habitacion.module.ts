import { Module } from '@nestjs/common';
import { HabitacionService } from './habitacion.service';
import { HabitacionController } from './habitacion.controller';
import { MongooseModule } from '@nestjs/mongoose';

import { HabitacionSchema } from './schema/habitacion.schema';
import { HABITACION } from 'src/commons/models/reserva.model';


@Module({
  imports:[
    MongooseModule.forFeatureAsync([{
        name:HABITACION.name,
        useFactory:()=>{
            return HabitacionSchema
        },
    }]),
],
  providers: [HabitacionService],
  controllers: [HabitacionController],
  exports:[HabitacionService]
})
export class HabitacionModule {}
