import { Instruccion } from "../Instruccion";

export enum Operacion{
    UnarioSuma,
    UnarioResta,
    Suma,
    Resta,
    Multiplicacion,
    Division,
    Parentesis
}

export default class Aritmetica implements Instruccion{

    private izquierdo:Instruccion;
    private derecho:Instruccion;
    private operador:Operacion;

    constructor(izquierdo:Instruccion, operador:string, derecho:Instruccion){
        this.izquierdo = izquierdo;
        this.derecho = derecho;
        this.operador = this.getOperador(operador);
    }

    getOperador(operador:string):Operacion{
        switch(operador){
            case '+':
                if(this.izquierdo == null){
                    return Operacion.UnarioSuma;
                }else{
                    return Operacion.Suma;
                }
            case '-':
                if(this.izquierdo == null){
                    return Operacion.UnarioResta;
                }else{
                    return Operacion.Resta;
                }
            case "*":
                return Operacion.Multiplicacion;
            case '/':
                return Operacion.Division;
            default:
                return Operacion.Parentesis;
            
        }
    }

    TraducirPython(): string {
        switch(this.operador){
            case Operacion.Parentesis: 
                return "(" + this.derecho.TraducirPython() + ")";
            case Operacion.UnarioSuma: 
                return this.derecho.TraducirPython();
            case Operacion.UnarioResta: 
                return "-" + this.derecho.TraducirPython();
            case Operacion.Suma: 
                return this.izquierdo.TraducirPython() + " + " + this.derecho.TraducirPython();
            case Operacion.Resta: 
                return this.izquierdo.TraducirPython() + " - " + this.derecho.TraducirPython();
            case Operacion.Multiplicacion: 
                return this.izquierdo.TraducirPython() + " * " + this.derecho.TraducirPython();
            case Operacion.Division: 
                return this.izquierdo.TraducirPython() + " / " + this.derecho.TraducirPython();
            default:
                return "";
                break;
        }
    }

}