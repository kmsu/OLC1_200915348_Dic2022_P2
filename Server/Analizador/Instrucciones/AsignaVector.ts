import Errores from "./Errores";
import { Instruccion } from "./Instruccion";
import Simbolo from "./TablaSimbolos/Simbolo";
import TablaSimbolos from "./TablaSimbolos/TablaSimbolos";
import { TipoDato } from "./TablaSimbolos/TipoDato";

export default class AsignaVector implements Instruccion{
    //valor es la expresion
    private identificador:string;
    private valor:Instruccion; 
    private linea:number;
    private columna:number;
    
    constructor(id:string, valor:Instruccion, linea:number, columna:number){
        this.identificador = id;
        this.valor = valor;
        this.linea = linea;
        this.columna = columna;
    }
    
    ejecutarInstruccion(tabla:TablaSimbolos, errores:Errores): string {
        let symValor = this.valor.ejecutarExpresion(tabla, errores);
    
        let sym = tabla.buscarSimbolo(this.identificador);
        if(sym != null){
            if(sym.getTipoDato() == symValor.getTipoDato()){
                sym.setValor(symValor.getValor());
            }else{
                //console.log("Error semantico: tipos incompatibles en la asignacion vector en la linea " + this.linea);
                errores.putError("Semantico", this.linea, this.columna, "tipos incompatibles en la asignacion vector en la linea ");
            }
        }else{
            //Error semantico, no existe la variable
            //console.log("Error semantico, no existe la variable " + this.identificador + " en la asignacion vector en linea " + this.linea);
            errores.putError("Semantico", this.linea, this.columna, "no existe la variable "+this.identificador);
        }
    
        return "";
    }

    ejecutarExpresion(tabla:TablaSimbolos, errores:Errores): Simbolo {
        throw new Error("Method not implemented.");
    }
    dibujarAST(nodoPadre: number): string {
        return "";
    }

}