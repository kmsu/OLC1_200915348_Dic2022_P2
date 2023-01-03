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
    
    ejecutarInstruccion(tabla: TablaSimbolos): string {
        let symValor = this.valor.ejecutarExpresion(tabla);
        for(let id of this.identificador){
            let sym = tabla.buscarSimbolo(id);
            if(sym != null){
                if(sym.getTipoDato() == symValor.getTipoDato()){
                    sym.setValor(symValor.getValor());
                    console.log("El valor de la variable " + id + " ha sido modificado");
                }else{
                    console.log("Error semantico: tipos incompatibles en la asignacion");
                }
            }else{
                //Error semantico, no existe la variable
                console.log("Error semantico, no existe la variable " + id);
            }
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