import { Instruccion } from "./Instruccion";


export default class Break implements Instruccion{
    
    private cadena:string;
    
    constructor(valor:string){
        this.cadena = valor.toLocaleLowerCase();
    }

    OperarExpresion(): string {
        return this.cadena;
    }
    
}