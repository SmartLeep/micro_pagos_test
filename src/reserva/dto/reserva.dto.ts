export class ReservaDTO{

    readonly idCliente: string;
    readonly fechaIngreso: Date;
    readonly fechaSalida: Date;
    habitacion: string;
    readonly montoTotal: string;
    readonly cantidadPersonas: number;
}