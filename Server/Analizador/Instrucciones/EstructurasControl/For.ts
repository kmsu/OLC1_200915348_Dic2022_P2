import { Instruccion } from "../Instruccion";
import Simbolo from "../TablaSimbolos/Simbolo";
import TablaSimbolos from "../TablaSimbolos/TablaSimbolos";

export default class For implements Instruccion{

    private expresion:Instruccion;
    private cuerpo:Array<Instruccion>;
    private linea:number;
    private columna:number;

    constructor(expresion:Instruccion, cuerpo:Array<Instruccion>, linea:number, columna:number){
        this.expresion = expresion;
        this.cuerpo = cuerpo;
        this.linea = linea;
        this.columna = columna;
    }

    ejecutarInstruccion(tabla: TablaSimbolos): string {
        let consola = "";
        let tablaFor = tabla.addSubEntorno("For");
        for(let instruccion of this.cuerpo){
            if(instruccion != null){
                let temp = instruccion.ejecutarInstruccion(tablaFor);
                if(temp != ""){
                    consola += temp + "\n";
                }
            }
        }
        this.ejecutarExpresion(tablaFor);
        return consola;
    }

    ejecutarExpresion(tabla: TablaSimbolos): Simbolo {
        //tabla.buscarSimbolo();
        //tabla.addSimbol();
        throw new Error("Method not implemented.");
    }
    dibujarAST(nodoPadre: number): string {
        throw new Error("Method not implemented.");
    }
}