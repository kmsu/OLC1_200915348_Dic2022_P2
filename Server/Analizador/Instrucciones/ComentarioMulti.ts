import { Instruccion } from "./Instruccion";

export default class ComentarioMulti implements Instruccion{
    
    private valor:string;
    
    constructor(valor:string){
        this.valor = valor.substring(2,valor.length-2);
        
    }
    OperarExpresion(): string {
        return "'''" + this.valor + "'''";
    }

}