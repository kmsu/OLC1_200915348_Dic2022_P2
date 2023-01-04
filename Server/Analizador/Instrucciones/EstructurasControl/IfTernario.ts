import { Instruccion } from "../Instruccion";
import Simbolo from "../TablaSimbolos/Simbolo";
import TablaSimbolos from "../TablaSimbolos/TablaSimbolos";
import { TipoDato } from "../TablaSimbolos/TipoDato";

export default class IfTernario implements Instruccion {

    private condicion:boolean;
    private condVerdadero:Instruccion;
    private condFalso:Instruccion;
    private linea:number;
    private columna: number;

    constructor(condicion:boolean, condVerdadero:Instruccion, condFalso:Instruccion, linea:number, columna: number){
        this.condicion = condicion;
        this.condVerdadero = condVerdadero;
        this.condFalso = condFalso;
        this.linea = linea;
        this.columna = columna;
    }

    ejecutarInstruccion(tabla: TablaSimbolos): string {
        throw new Error("Method not implemented.");
    }

    ejecutarExpresion(tabla: TablaSimbolos): Simbolo {
        let valor;
        if(this.condicion){
            valor = this.condVerdadero.ejecutarExpresion(tabla).getValor();
        }else{
            valor = this.condFalso.ejecutarExpresion(tabla).getValor();
        }

        let sym = new Simbolo(TipoDato.BOOLEANO, valor, this.linea, this.columna); //creamos un simbolo que representa una expresion
        return sym;
    }
    
    dibujarAST(nodoPadre: number): string {
        throw new Error("Method not implemented.");
    }
}

