import { Instruccion } from "./Instruccion";
import Simbolo from "./TablaSimbolos/Simbolo";
import TablaSimbolos from "./TablaSimbolos/TablaSimbolos";
import { TipoDato } from "./TablaSimbolos/TipoDato";

export default class Tipo implements Instruccion{

    private tipo:TipoDato;
    private linea:number;
    private columna: number;

    constructor(tipo:TipoDato, linea:number, columna: number){
        this.tipo = tipo;
        this.linea = linea;
        this.columna = columna;
    }

    ejecutarInstruccion(tabla: TablaSimbolos): string {
        throw new Error("Method not implemented.");
    }

    ejecutarExpresion(tabla: TablaSimbolos): Simbolo {
        return new Simbolo(this.tipo, null, this.linea, this.columna); //simbolo vacio se utiliza para representar el tipo de la variable a declarar
    }
    
    dibujarAST(nodoPadre: number): string {
        throw new Error("Method not implemented.");
    }
}