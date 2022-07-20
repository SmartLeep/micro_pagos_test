export interface IReserva extends Document{
    idCliente: string;
    fechaIngreso: Date;
    fechaSalida: Date;
    idHabitacion: string;
    montoTotal: string;
    cantidadPersonas: number;
 }