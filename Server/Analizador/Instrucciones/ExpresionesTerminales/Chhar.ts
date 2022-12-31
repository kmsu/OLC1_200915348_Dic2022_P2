import { Instruccion } from "../Instruccion";

export default class Chhar implements Instruccion{
    
    private caracter:string;
    
    constructor(valor:string){
        this.caracter = valor;
    }

    TraducirPython(): string {
        return this.caracter;
    }
    
}