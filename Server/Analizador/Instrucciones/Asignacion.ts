import Errores from "./Errores";
import { Instruccion } from "./Instruccion";
import Simbolo from "./TablaSimbolos/Simbolo";
import TablaSimbolos from "./TablaSimbolos/TablaSimbolos";
import { TipoDato } from "./TablaSimbolos/TipoDato";

export default class Asignacion implements Instruccion{
    //valor es la expresion
    private identificador:Array<string>;
    private valor:Instruccion; 
    private linea:number;
    private columna:number;
    
    constructor(id:Array<string>, valor:Instruccion, linea:number, columna:number){
        this.identificador = id;
        this.valor = valor;
        this.linea = linea;
        this.columna = columna;
    }
    
    ejecutarInstruccion(tabla:TablaSimbolos, errores:Errores): string {
        let symValor = this.valor.ejecutarExpresion(tabla, errores);
        for(let id of this.identificador){
            let sym = tabla.buscarSimbolo(id);
            if(sym != null){
                if(sym.getTipoDato() == symValor.getTipoDato()){
                    sym.setValor(symValor.getValor());
                }else{
                    //console.log("Error semantico: tipos incompatibles en la asignacion en la linea " + this.linea);
                    errores.putError("Semantico", this.linea, this.columna, "tipos incompatibles en la asignacion");
                }
            }else{
                //Error semantico, no existe la variable
                //console.log("Error semantico, no existe la variable " + id + "en asignacion en la linea " + this.linea);
                errores.putError("Semantico", this.linea, this.columna, "no existe la variable " + id + " en asignacion");
            }
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