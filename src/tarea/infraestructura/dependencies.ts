import { Express } from "express";
import { AddATareaCasoUso } from "../../aplicacion/addTarea.CasoUso";

export class AddTareaController{
    constructor(readonly addTareaCasoUso:AddATareaCasoUso){}
    async run(req:req , res:res){
        try {
            let{id,nombre} = req.body;
            let clienteCreado = await this.addTareaCasoUso.run(id,nombre);

            if(clienteCreado){
                return res.status(200).send({
                    status:"success",
                    data:{
                        id: clienteCreado.id,
                        nombre: clienteCreado.nombre
                    },
                    message:"Cliente creado exitosamente"
                })
            }else{
                return res.status(400).send({
                    status:"success",
                    data:[],
                    message:"Error al agregar cliente en archivo addCliente.controller"
                })
            }
        } catch (error) {
            console.log("Error en addCliente.controller",error);
            res.status(500).send({
                status:"error",
                message:"Error en el servidor"
            })
            
        }
    }
}