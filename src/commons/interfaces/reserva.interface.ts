import { IHabitacion } from "./habitacion.interface";

export interface IReserva extends Document{
    idCliente: string;
    fechaIngreso: Date;
    fechaSalida: Date;
    habitacion: IHabitacion;
    montoTotal: string;
    cantidadPersonas: number;
 }