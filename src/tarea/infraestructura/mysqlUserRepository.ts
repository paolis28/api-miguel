import { Tarea } from "../dominio/tarea";
import { TareaRepository } from "../dominio/tareaRepository";
import TareaModel from "./model/tarea.model";

export class mysqlUserRepository implements TareaRepository{
    async addTarea(id: number, nombre: string): Promise<Tarea | null> {
        try {
            const tareaRegistrada = await TareaModel.create({id,nombre});
            return new Tarea(tareaRegistrada.id, tareaRegistrada.nombre)
        } catch (error) {
            console.log("Error en mysqlUser.repository", error);
            return null;
        }
    }
}