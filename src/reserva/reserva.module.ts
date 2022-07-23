import { Module } from '@nestjs/common';
import { ReservaService } from './reserva.service';
import { ReservaController } from './reserva.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RESERVA } from 'src/commons/models/reserva.model';
import { ReservaSchema } from './schema/reserva.shema';
import { HabitacionModule } from 'src/habitacion/habitacion.module';

@Module({
  imports:[
    MongooseModule.forFeatureAsync([{
      name:RESERVA.name,
      useFactory:()=>ReservaSchema.plugin(require('mongoose-autopopulate')),
    },
  ]),HabitacionModule
  ],
  providers: [ReservaService],
  controllers: [ReservaController],
  exports:[ReservaService]
})
export class ReservaModule {}
