import { Instruccion } from "../Instruccion";

export default class Logica implements Instruccion{

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
            case 'Not': 
                return "not " + this.derecho.TraducirPython();
            case 'And': 
                return this.izquierdo.TraducirPython() + " and " + this.derecho.TraducirPython();
            case 'Or': 
                return this.izquierdo.TraducirPython() + " or " + this.derecho.TraducirPython();
            default:
                return "";
                break;
        }
    }
    
}