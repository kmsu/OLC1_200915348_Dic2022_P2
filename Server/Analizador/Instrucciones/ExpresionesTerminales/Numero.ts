import Errores from "../Errores";
import { Instruccion } from "../Instruccion";
import Simbolo from "../TablaSimbolos/Simbolo";
import TablaSimbolos from "../TablaSimbolos/TablaSimbolos";
import { TipoDato } from "../TablaSimbolos/TipoDato";

export default class Numero implements Instruccion {

    private valor:number;
    private linea:number;
    private columna: number;

    constructor(valor:number, linea:number, columna: number){
        this.valor = valor;
        this.linea = linea;
        this.columna = columna;
    }

    ejecutarInstruccion(tabla:TablaSimbolos, errores:Errores): string {
        throw new Error("Method not implemented.");
    }

    ejecutarExpresion(tabla:TablaSimbolos, errores:Errores): Simbolo {
        let sym = new Simbolo(TipoDato.ENTERO, this.valor, this.linea, this.columna); //creamos un simbolo que representa una expresion
        return sym;
    }
    
    dibujarAST(nodoPadre: number): string {
        let id=new Date().getUTCMilliseconds();
        let codGraphviz = id + " [ label=\"" + this.valor + "\"];\n";
        codGraphviz += nodoPadre + " -> " + id + ";\n";
        return codGraphviz;
    }
}

