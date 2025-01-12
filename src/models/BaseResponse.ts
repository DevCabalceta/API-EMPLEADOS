

export default class BaseReponse {
    
    public ok: boolean;
    public data: any; // Que puede ser cualquier cosa (string, number, Empleado, ...)
    public message: string;

    constructor(ok: boolean, data: any, message:string){
        this.ok = ok;
        this.data = data;
        this.message = message;
    }
}