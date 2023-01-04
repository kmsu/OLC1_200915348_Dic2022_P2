import Errores from "../Errores";
import { Instruccion } from "../Instruccion";
import Simbolo from "../TablaSimbolos/Simbolo";
import TablaSimbolos from "../TablaSimbolos/TablaSimbolos";

export default class Case implements Instruccion{

    private condicion:string;
    private cuerpo:Array<Instruccion>;
    private cuerpoCase:Instruccion;
    private linea:number;
    private columna:number;

    constructor(condicion:string, cuerpo:Array<Instruccion>, cuerpoCase:Instruccion, linea:number, columna:number){
        this.condicion = condicion;
        this.cuerpo = cuerpo;
        this.cuerpoCase = cuerpoCase;
        this.linea = linea;
        this.columna = columna;
    }

    ejecutarInstruccion(tabla:TablaSimbolos, errores:Errores): string {
        let consola = "";
        let tablaCase = tabla.addSubEntorno("Case");
        
        for(let instruccion of this.cuerpo){
            if(instruccion != null){
                let temp = instruccion.ejecutarInstruccion(tablaCase, errores);
                if(temp != ""){
                    consola += temp + "\n";
                }
            }
        }

        if(this.cuerpoCase != null){
            consola += this.cuerpoCase.ejecutarInstruccion(tabla, errores);
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