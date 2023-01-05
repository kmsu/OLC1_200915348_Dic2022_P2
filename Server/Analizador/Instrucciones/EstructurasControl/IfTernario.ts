import Errores from "../Errores";
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

    ejecutarInstruccion(tabla:TablaSimbolos, errores:Errores): string {
        throw new Error("Method not implemented.");
    }

    ejecutarExpresion(tabla:TablaSimbolos, errores:Errores): Simbolo {
        let valor;
        if(this.condicion){
            valor = this.condVerdadero.ejecutarExpresion(tabla, errores).getValor();
        }else{
            valor = this.condFalso.ejecutarExpresion(tabla, errores).getValor();
        }

        let sym = new Simbolo(TipoDato.BOOLEANO, valor, this.linea, this.columna); //creamos un simbolo que representa una expresion
        return sym;
    }
    
    dibujarAST(nodoPadre: number): string {
        return "";
    }
}

