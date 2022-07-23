import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReservaModule } from './reserva/reserva.module';
import { HabitacionModule } from './habitacion/habitacion.module';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath:['.env'],
    isGlobal:true,
  }),
  MongooseModule.forRoot("mongodb+srv://adminReservas:reservas2021@cluster0.ixfnpo4.mongodb.net/?retryWrites=true&w=majority"),
  ReservaModule,
  HabitacionModule
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
