import { Instruccion } from "../Instruccion";

export default class Identificador implements Instruccion{
    
    private id:string;
    
    constructor(valor:string){
        this.id = valor;
    }

    TraducirPython(): string {
        return this.id;
    }
    
}