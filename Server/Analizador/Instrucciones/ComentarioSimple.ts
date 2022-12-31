import { Instruccion } from "./Instruccion";

export default class ComentaioSimple implements Instruccion{
    
    private valor:string;
    
    constructor(valor:string){
        this.valor = valor.substring(2,valor.length);
        
    }

    TraducirPython(): string {
        return "#" + this.valor;
    }    
}