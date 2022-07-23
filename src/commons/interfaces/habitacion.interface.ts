export interface IHabitacion extends Document{
    capacity: number;
    description: string;
    state: string;
    name:string;
    numberBed: number;
    price:string;
    typeHabitacion:string;
    urlPhoto:string;
 }