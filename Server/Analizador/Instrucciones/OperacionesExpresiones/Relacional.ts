import { Instruccion } from "../Instruccion";

export default class Relacional implements Instruccion{

    private izquierdo:Instruccion;
    private derecho:Instruccion;
    private operador:string;

    constructor(izquierdo:Instruccion, operador:string, derecho:Instruccion){
        this.izquierdo = izquierdo;
        this.derecho = derecho;
        this.operador = operador;
    }

    TraducirPython(): string {
        switch(this.operador){
            case '>': 
                return this.izquierdo.TraducirPython() + " > " + this.derecho.TraducirPython();
            case '<': 
                return this.izquierdo.TraducirPython() + " < " + this.derecho.TraducirPython();
            case '==': 
                return this.izquierdo.TraducirPython() + " == " + this.derecho.TraducirPython();
            case '!=': 
                return this.izquierdo.TraducirPython() + " != " + this.derecho.TraducirPython();
            case '>=': 
                return this.izquierdo.TraducirPython() + " >= " + this.derecho.TraducirPython();
            case '<=': 
                return this.izquierdo.TraducirPython() + " <= " + this.derecho.TraducirPython();
            default:
                return "";
                break;
        }
    }
    
}