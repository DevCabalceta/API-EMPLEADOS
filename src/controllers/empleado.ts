import {Request, Response} from 'express';
import {supabase} from '../apis/supabase';
import BaseResponse from '../models/BaseResponse';

// Crear un nuevo recurso (empleado)
export const create = async(req: Request, res: Response) => {

    const empleado = req.body; // Obtenemos el empleado que nos envia el cliente

    console.log(empleado)

    const {error} = await supabase.from('empleado').insert(empleado);

    if(error){
        res.status(400).json(new BaseResponse(true, null, "No se pudo agregar el empleado"));
        return;
    }

    res.status(201).json(new BaseResponse(true, null, "El empleado se agrego correctamente"))

}

// Obtiene todos los registros del recurso (empleado). Obtiene todos los empleados
export const getAll = async(req: Request, res: Response) => {
    const {data} = await supabase.from('empleado').select()
    res.json(new BaseResponse(true, data, "Empleados encontrados"))

}

// Obtiene un unico registro del recurso (empleado) por medio de un id
export const getById = async (req: Request, res: Response) => {

    // const {id} = req.params; //1
    const id = req.params.id; // Obtenemos el id del param que envia el cliente

    // Consultamos un empleado usando supabase a traves del select y usando un condicion con eq([columna], [dato a buscar])
    const {data, error} = await supabase.from('empleado').select().eq("id", id);

    if(error != null){
        res.status(400).json(new BaseResponse(false, null, error.message));
        return;
    }

    // data === null = Preguntamos si la lista 'data' de supabase viene null
    // Usamos el ternario para saber que guardar en la variable 'empleado' segun la condicion
    // data.at(0) = Extrae el primer valor de la lista, si o existe el valor me devuelve un valor indefined
    const empleado = data === null ? undefined : data?.at(0);

    if(empleado === undefined){ //Preguntamos si el empleado no existe

        // Creamos una instancia del clase BaseReponse para crear el objeto
        // de respuesta y enviamos los parametros necesarios al constructor
        const baseResponse = new BaseResponse(false, null, "No se ha encontrado el empleado");

        // Respondemos con un json al cliente con el objeto baseResponse
        res.json(baseResponse);
        return;
    }


    res.json(new BaseResponse(true, empleado, "Se ha encontrado el empleado")); // status 200

}

// Elimina un recurso (empleado)
export const remove = (req: Request, res: Response) => {

}

// Actualiza un recurso (empleado)
export const update = (req: Request, res: Response) => {

}

// export {
//     create,
//     getAll,
//     getById,
//     remove,
//     update
// }