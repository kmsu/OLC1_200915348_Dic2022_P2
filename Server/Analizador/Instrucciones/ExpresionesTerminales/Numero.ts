import { Instruccion } from "../Instruccion";

export default class Numero implements Instruccion{
    
    private valor:string;
    
    constructor(valor:string){
        this.valor = valor;
    }

    TraducirPython(): string {
        return this.valor;
    }
    
}

