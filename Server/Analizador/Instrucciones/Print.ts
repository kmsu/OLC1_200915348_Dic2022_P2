import { Instruccion } from "./Instruccion";
import Simbolo from "./TablaSimbolos/Simbolo";
import TablaSimbolos from "./TablaSimbolos/TablaSimbolos";
import { TipoDato } from "./TablaSimbolos/TipoDato";


export default class Print implements Instruccion{
    
    private expresion:Instruccion;
    private linea:number;
    private columna:number;
    
    constructor(expresion:Instruccion, linea:number, columna:number){
        this.expresion = expresion;
        this.linea = linea;
        this.columna = columna;
    }

    ejecutarInstruccion(tabla: TablaSimbolos): string {
        let symExpresion = this.expresion.ejecutarExpresion(tabla);
        let consola = "";
        if(symExpresion !=null){
            if(symExpresion.getTipoDato() != TipoDato.INVALIDO){
                if(symExpresion.getTipoDato() == TipoDato.CARACTER){
                    consola = "'" + String.fromCharCode(Number(symExpresion.getValor())) + "'";
                }else{
                    consola = symExpresion.getValor().toString();
                }
            }
        }
        return consola;
    
    }

    ejecutarExpresion(tabla: TablaSimbolos): Simbolo {
        throw new Error("Method not implemented.");
    }
    
    dibujarAST(nodoPadre: number): string {
        throw new Error("Method not implemented.");
    }

    
}