import Errores from "../Errores";
import { Instruccion } from "../Instruccion";
import Simbolo from "../TablaSimbolos/Simbolo";
import TablaSimbolos from "../TablaSimbolos/TablaSimbolos";

export default class Switch implements Instruccion{

    private expresion:Instruccion;
    private cuerpoCase:Instruccion;
    private linea:number;
    private columna:number;

    constructor(expresion:Instruccion, cuerpoCase:Instruccion, linea:number, columna:number){
        this.expresion = expresion;
        this.cuerpoCase = cuerpoCase;
        this.linea = linea;
        this.columna = columna;
    }

    ejecutarInstruccion(tabla:TablaSimbolos, errores:Errores): string {
        let consola = "";
        let tablaSwitch = tabla.addSubEntorno("Switch");
        
        if(this.cuerpoCase != null){
            consola += this.cuerpoCase.ejecutarInstruccion(tablaSwitch, errores);
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