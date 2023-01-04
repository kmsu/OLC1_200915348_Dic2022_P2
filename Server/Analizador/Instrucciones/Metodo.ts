import { Instruccion } from "./Instruccion";
import Simbolo from "./TablaSimbolos/Simbolo";
import TablaSimbolos from "./TablaSimbolos/TablaSimbolos";


export default class Metodo implements Instruccion{

    private id:string;
    private cuerpo:Array<Instruccion>;
    private linea:number;
    private columna:number;

    constructor(id:string, cuerpo:Array<Instruccion>, linea:number, columna:number){
        this.id = id;
        this.cuerpo = cuerpo;
        this.linea = linea;
        this.columna = columna;
    }

    ejecutarInstruccion(tabla: TablaSimbolos): string {
        let consola = "";
        let tablaMetodo = tabla.addSubEntorno("Metodo Void" + this.id);
        for(let instruccion of this.cuerpo){
            if(instruccion != null){
                let temp = instruccion.ejecutarInstruccion(tablaMetodo);
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