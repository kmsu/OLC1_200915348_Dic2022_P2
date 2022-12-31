import { Instruccion } from "./Instruccion";

export enum Tipo{
    ENTERO,
    DECIMAL,
    BOOLEANO,
    CARACTER,
    CADENA, 
    VOID
}

export default class TipoDato implements Instruccion{
    
    private data:Tipo //para manejar los tipos en semantico
    private dato:string

    constructor(tipoDato:string){
        this.dato = tipoDato;
    }
    OperarExpresion(): string {
        return "";
    }

}