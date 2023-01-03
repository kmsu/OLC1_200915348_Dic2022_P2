import { Instruccion } from "../Instruccion";
import Simbolo from "../TablaSimbolos/Simbolo";
import TablaSimbolos from "../TablaSimbolos/TablaSimbolos";

export default class Else implements Instruccion{

    private cuerpo:Array<Instruccion>;
    private linea:number;
    private columna:number;

    constructor(cuerpo:Array<Instruccion>, linea:number, columna:number){
        this.cuerpo = cuerpo;
        this.linea = linea;
        this.columna = columna;
    }

    ejecutarInstruccion(tabla: TablaSimbolos): string {
        let consola = "";
        let tablaElse = new TablaSimbolos(tabla, "Else");
        for(let instruccion of this.cuerpo){
            if(instruccion != null){
                let temp = instruccion.ejecutarInstruccion(tablaElse);
                if(temp != ""){
                    consola += temp + "\n";
                }
            }
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