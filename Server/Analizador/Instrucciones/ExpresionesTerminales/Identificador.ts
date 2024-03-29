import Errores from "../Errores";
import { Instruccion } from "../Instruccion";
import Simbolo from "../TablaSimbolos/Simbolo";
import TablaSimbolos from "../TablaSimbolos/TablaSimbolos";
import { TipoDato } from "../TablaSimbolos/TipoDato";

//Funciona como un getIdentificador
export default class Identificador implements Instruccion{

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
        let sym = tabla.buscarSimbolo(this.valor);
        if(sym == null){
            //Error semantico, no existe la variable
            //console.log("Error semantico, no existe la variable  identificador en linea " + this.linea);
            errores.putError("Semantico", this.linea, this.columna, "no existe la variable " + this.valor);
            sym = new Simbolo(TipoDato.INVALIDO, "", this.linea, this.columna);
        }
        return sym;
    }

    dibujarAST(nodoPadre: number): string {
        let codGraphviz = nodoPadre + 1 + " [ label=\"" + this.valor + "\"];\n";
        codGraphviz += nodoPadre + " -> " + (nodoPadre + 1) + ";\n";
        return codGraphviz;
    }
}