import Errores from "../Errores";
import { Instruccion } from "../Instruccion";
import Simbolo from "../TablaSimbolos/Simbolo";
import TablaSimbolos from "../TablaSimbolos/TablaSimbolos";
import { TipoDato } from "../TablaSimbolos/TipoDato";

export default class Booleano implements Instruccion{

    private valor:boolean;
    private linea:number;
    private columna: number;

    constructor(valor:boolean, linea:number, columna: number){
        this.valor = valor;
        this.linea = linea;
        this.columna = columna;
    }

    ejecutarInstruccion(tabla:TablaSimbolos, errores:Errores): string {
        throw new Error("Method not implemented.");
    }

    ejecutarExpresion(tabla:TablaSimbolos, errores:Errores): Simbolo {
        return new Simbolo(TipoDato.BOOLEANO, this.valor, this.linea, this.columna); //creamos un simbolo que representa una expresion
    }

    dibujarAST(nodoPadre: number): string {
        throw new Error("Method not implemented.");
    }
    
}