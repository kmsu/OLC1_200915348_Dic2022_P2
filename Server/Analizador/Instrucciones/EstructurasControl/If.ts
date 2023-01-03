import { Instruccion } from "../Instruccion";
import Simbolo from "../TablaSimbolos/Simbolo";
import TablaSimbolos from "../TablaSimbolos/TablaSimbolos";

export default class If implements Instruccion{

    private expresion:Instruccion;
    private cuerpo:Array<Instruccion>;
    private cuerpoElse:Instruccion;
    private linea:number;
    private columna:number;

    constructor(expresion:Instruccion, cuerpo:Array<Instruccion>, cuerpoElse:Instruccion, linea:number, columna:number){
        this.expresion = expresion;
        this.cuerpo = cuerpo;
        this.cuerpoElse = cuerpoElse;
        this.linea = linea;
        this.columna = columna;
    }

    ejecutarInstruccion(tabla: TablaSimbolos): string {
        let consola = "";
        let tablaIf = new TablaSimbolos(tabla, "If");
        for(let instruccion of this.cuerpo){
            if(instruccion != null){
                let temp = instruccion.ejecutarInstruccion(tablaIf);
                if(temp != ""){
                    consola += temp + "\n";
                }
            }
        }

        if(this.cuerpoElse != null){
            
            consola += this.cuerpoElse.ejecutarInstruccion(tabla);
        }

        return consola;
    }

    ejecutarExpresion(tabla: TablaSimbolos): Simbolo {
        throw new Error("Method not implemented.");
    }

    dibujarAST(nodoPadre: number): string {
        throw new Error("Method not implemented.");
    }

}