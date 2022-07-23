import { HabitacionDTO } from "src/habitacion/dto/habitacion.dto";
import { IHabitacion } from "./habitacion.interface";

export interface IReserva extends Document{
    idCliente: string;
    fechaIngreso: Date;
    fechaSalida: Date;
    habitacion: HabitacionDTO;
    montoTotal: string;
    cantidadPersonas: number;
 }