import { Module } from '@nestjs/common';
import { ReservaService } from './reserva.service';
import { ReservaController } from './reserva.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RESERVA } from 'src/commons/models/reserva.model';
import { ReservaSchema } from './schema/reserva.shema';

@Module({
  imports:[
    MongooseModule.forFeatureAsync([{
      name:RESERVA.name,
      useFactory:()=>{
        return ReservaSchema
      },
    }]),
  ],
  providers: [ReservaService],
  controllers: [ReservaController]
})
export class ReservaModule {}
