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
    
    ejecutarInstruccion(tabla: TablaSimbolos): string {
        let symValor = this.valor.ejecutarExpresion(tabla);
    
        let sym = tabla.buscarSimbolo(this.identificador);
        if(sym != null){
            if(sym.getTipoDato() == symValor.getTipoDato()){
                sym.setValor(symValor.getValor());
                console.log("El valor de la variable " + this.identificador + " ha sido modificado");
            }else{
                console.log("Error semantico: tipos incompatibles en la asignacion");
            }
        }else{
            //Error semantico, no existe la variable
            console.log("Error semantico, no existe la variable " + this.identificador);
        }
    
        return "";
    }

    ejecutarExpresion(tabla: TablaSimbolos): Simbolo {
        throw new Error("Method not implemented.");
    }
    dibujarAST(nodoPadre: number): string {
        throw new Error("Method not implemented.");
    }

}