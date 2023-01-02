import { Instruccion } from "../Instruccion";
import Simbolo from "../TablaSimbolos/Simbolo";
import TablaSimbolos from "../TablaSimbolos/TablaSimbolos";

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

    ejecutarInstruccion(tabla: TablaSimbolos): string {
        throw new Error("Method not implemented.");
    }

    ejecutarExpresion(tabla: TablaSimbolos): Simbolo {
        let sym = tabla.buscarSimbolo(this.valor);
        if(sym == null){
            //Error semantico, no existe la variable
            console.log("getIdentificador");
        }
        return sym;
    }

    dibujarAST(nodoPadre: number): string {
        throw new Error("Method not implemented.");
    }
}