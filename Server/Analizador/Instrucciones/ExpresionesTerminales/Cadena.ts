import { Instruccion } from "../Instruccion";

export default class Cadena implements Instruccion{
    
    private cadena:string;
    
    constructor(valor:string){
        this.cadena = valor;
    }

    TraducirPython(): string {
        return this.cadena;
    }
    
}