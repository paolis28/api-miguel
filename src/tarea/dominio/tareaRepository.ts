import { Tarea } from "./tarea";

export interface TareaRepository{
    addTarea(id:number, nombre:string):Promise<Tarea | null>;
}