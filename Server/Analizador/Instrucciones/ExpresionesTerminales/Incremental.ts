import { Instruccion } from "../Instruccion";
import Simbolo from "../TablaSimbolos/Simbolo";
import TablaSimbolos from "../TablaSimbolos/TablaSimbolos";
import { TipoDato } from "../TablaSimbolos/TipoDato";

export default class Incremental implements Instruccion{

    private id:string;
    private tipo:string;
    private linea:number;
    private columna: number;

    constructor(id:string, tipo:string, linea:number, columna: number){
        this.id = id;
        this.tipo = tipo;
        this.linea = linea;
        this.columna = columna;
    }

    ejecutarInstruccion(tabla: TablaSimbolos): string {
        this.ejecutarExpresion(tabla);
        return "";
    }

    ejecutarExpresion(tabla: TablaSimbolos): Simbolo {
        let sym = tabla.buscarSimbolo(this.id);
        if(sym != null){
            if(this.tipo == '++'){
                sym.setValor(Number(sym.getValor()+1));
            }else{
                sym.setValor(Number(sym.getValor()-1));
            }
        }else{
            //Error semantico, no existe la variable
            console.log("Error semantico, no existe la variable en incrementales en linea " + this.linea);
            sym = new Simbolo(TipoDato.INVALIDO, "", this.linea, this.columna);
        }
        return sym;
    }

    dibujarAST(nodoPadre: number): string {
        throw new Error("Method not implemented.");
    }
}