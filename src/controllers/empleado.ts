import {Request, Response} from 'express';


// Crear un nuevo recurso (empleado)
export const create = (req: Request, res: Response) => {

}

// Obtiene todos los registros del recurso (empleado). Obtiene todos los empleados
export const getAll = (req: Request, res: Response) => {

}

// Obtiene un unico registro del recurso (empleado) por medio de un id
export const getById = (req: Request, res: Response) => {

    const id = req.params.id;

    const persona = {
        name: "Gabriel",
        age: 25,
        currentId: id
    }

    res.json(persona);
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