import Errores from "../Errores";
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

    ejecutarInstruccion(tabla:TablaSimbolos, errores:Errores): string {
        let consola = "";
        let tablaFor = tabla.addSubEntorno("For");
        for(let instruccion of this.cuerpo){
            if(instruccion != null){
                let temp = instruccion.ejecutarInstruccion(tablaFor, errores);
                if(temp != ""){
                    consola += temp + "\n";
                }
            }
        }
        return consola;
    }

    ejecutarExpresion(tabla:TablaSimbolos, errores:Errores): Simbolo {
        throw new Error("Method not implemented.");
    }
    dibujarAST(nodoPadre: number): string {
        throw new Error("Method not implemented.");
    }
}