import Errores from "../Errores";
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

    ejecutarInstruccion(tabla:TablaSimbolos, errores:Errores): string {
        this.ejecutarExpresion(tabla, errores);
        return "";
    }

    ejecutarExpresion(tabla:TablaSimbolos, errores:Errores): Simbolo {
        let sym = tabla.buscarSimbolo(this.id);
        if(sym != null){
            if(this.tipo == '++'){
                sym.setValor(Number(sym.getValor()+1));
            }else{
                sym.setValor(Number(sym.getValor()-1));
            }
        }else{
            //Error semantico, no existe la variable
            //console.log("Error semantico, no existe la variable en incrementales en linea " + this.linea);
            errores.putError("Semantico", this.linea, this.columna, "no existe la variable " + this.id);
            sym = new Simbolo(TipoDato.INVALIDO, "", this.linea, this.columna);
        }
        return sym;
    }

    dibujarAST(nodoPadre: number): string {
        return "";
    }
}