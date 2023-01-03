import { Instruccion } from "../Instruccion";
import Simbolo from "../TablaSimbolos/Simbolo";
import TablaSimbolos from "../TablaSimbolos/TablaSimbolos";

export default class While implements Instruccion{

    private expresion:Instruccion;
    private cuerpo:Array<Instruccion>;

    constructor(expresion:Instruccion, cuerpo:Array<Instruccion>){
        this.expresion = expresion;
        this.cuerpo = cuerpo;
    }

    ejecutarInstruccion(tabla: TablaSimbolos): string {
        throw new Error("Method not implemented.");
    }
    
    ejecutarExpresion(tabla: TablaSimbolos): Simbolo {
        throw new Error("Method not implemented.");
    }
    dibujarAST(nodoPadre: number): string {
        throw new Error("Method not implemented.");
    }
}