import Errores from "../Errores";
import { Instruccion } from "../Instruccion";
import Simbolo from "../TablaSimbolos/Simbolo";
import TablaSimbolos from "../TablaSimbolos/TablaSimbolos";
import { TipoDato } from "../TablaSimbolos/TipoDato";

export default class Cadena implements Instruccion{

    private valor:string;
    private linea:number;
    private columna: number;

    constructor(valor:string, linea:number, columna: number){
        this.valor = valor;
        this.linea = linea;
        this.columna = columna;
    }

    ejecutarInstruccion(tabla:TablaSimbolos, errores:Errores): string {
        throw new Error("Method not implemented.");
    }

    ejecutarExpresion(tabla:TablaSimbolos, errores:Errores): Simbolo {
        return new Simbolo(TipoDato.CADENA, this.valor, this.linea, this.columna); //creamos un simbolo que representa una expresion
    }
    
    dibujarAST(nodoPadre: number): string {
        let codGraphviz = nodoPadre + 1 + " [ label=\"" + this.valor + "\"];\n";
        codGraphviz += nodoPadre + " -> " + (nodoPadre + 1) + ";\n";
        return codGraphviz;
    }
}