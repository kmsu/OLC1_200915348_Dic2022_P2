import { Instruccion } from "../Instruccion";
import Simbolo from "../TablaSimbolos/Simbolo";
import TablaSimbolos from "../TablaSimbolos/TablaSimbolos";
import { TipoDato } from "../TablaSimbolos/TipoDato";

export default class Aritmetica implements Instruccion{

    private izquierdo:Instruccion;
    private derecho:Instruccion;
    private operador:string;
    private linea:number;
    private columna: number;

    //Arreglo constante, no debe cambiar sus valores en ningun momento. Tomar en cuenta una fila y una columna de tipo invalido
    private matrizSuma = [
        [TipoDato.ENTERO, TipoDato.DECIMAL, TipoDato.ENTERO, TipoDato.ENTERO, TipoDato.CADENA, TipoDato.INVALIDO],
        [TipoDato.DECIMAL, TipoDato.DECIMAL, TipoDato.DECIMAL, TipoDato.DECIMAL, TipoDato.CADENA, TipoDato.INVALIDO],
        [TipoDato.ENTERO, TipoDato.DECIMAL, TipoDato.INVALIDO, TipoDato.INVALIDO, TipoDato.CADENA, TipoDato.INVALIDO],
        [TipoDato.ENTERO, TipoDato.DECIMAL, TipoDato.INVALIDO, TipoDato.CADENA, TipoDato.CADENA, TipoDato.INVALIDO],
        [TipoDato.CADENA, TipoDato.CADENA, TipoDato.CADENA, TipoDato.CADENA, TipoDato.CADENA, TipoDato.INVALIDO],
        [TipoDato.INVALIDO, TipoDato.INVALIDO, TipoDato.INVALIDO, TipoDato.INVALIDO, TipoDato.INVALIDO, TipoDato.INVALIDO]
    ] as const;

    private matrizResta = [
        [TipoDato.ENTERO, TipoDato.DECIMAL, TipoDato.ENTERO, TipoDato.ENTERO, TipoDato.INVALIDO, TipoDato.INVALIDO],
        [TipoDato.DECIMAL, TipoDato.DECIMAL, TipoDato.DECIMAL, TipoDato.DECIMAL, TipoDato.INVALIDO, TipoDato.INVALIDO],
        [TipoDato.ENTERO, TipoDato.DECIMAL, TipoDato.INVALIDO, TipoDato.INVALIDO, TipoDato.INVALIDO, TipoDato.INVALIDO],
        [TipoDato.ENTERO, TipoDato.DECIMAL, TipoDato.INVALIDO, TipoDato.INVALIDO, TipoDato.INVALIDO, TipoDato.INVALIDO],
        [TipoDato.INVALIDO, TipoDato.INVALIDO, TipoDato.INVALIDO, TipoDato.INVALIDO, TipoDato.INVALIDO, TipoDato.INVALIDO],
        [TipoDato.INVALIDO, TipoDato.INVALIDO, TipoDato.INVALIDO, TipoDato.INVALIDO, TipoDato.INVALIDO, TipoDato.INVALIDO]
    ] as const;

    private matrizMultiplicacion = [
        [TipoDato.ENTERO, TipoDato.DECIMAL, TipoDato.INVALIDO, TipoDato.ENTERO, TipoDato.INVALIDO, TipoDato.INVALIDO],
        [TipoDato.DECIMAL, TipoDato.DECIMAL, TipoDato.INVALIDO, TipoDato.DECIMAL, TipoDato.INVALIDO, TipoDato.INVALIDO],
        [TipoDato.INVALIDO, TipoDato.INVALIDO, TipoDato.INVALIDO, TipoDato.INVALIDO, TipoDato.INVALIDO, TipoDato.INVALIDO],
        [TipoDato.ENTERO, TipoDato.DECIMAL, TipoDato.INVALIDO, TipoDato.INVALIDO, TipoDato.INVALIDO, TipoDato.INVALIDO],
        [TipoDato.INVALIDO, TipoDato.INVALIDO, TipoDato.INVALIDO, TipoDato.INVALIDO, TipoDato.INVALIDO, TipoDato.INVALIDO],
        [TipoDato.INVALIDO, TipoDato.INVALIDO, TipoDato.INVALIDO, TipoDato.INVALIDO, TipoDato.INVALIDO, TipoDato.INVALIDO]
    ] as const;

    private matrizDivision = [
        [TipoDato.DECIMAL, TipoDato.DECIMAL, TipoDato.INVALIDO, TipoDato.DECIMAL, TipoDato.INVALIDO, TipoDato.INVALIDO],
        [TipoDato.DECIMAL, TipoDato.DECIMAL, TipoDato.INVALIDO, TipoDato.DECIMAL, TipoDato.INVALIDO, TipoDato.INVALIDO],
        [TipoDato.INVALIDO, TipoDato.INVALIDO, TipoDato.INVALIDO, TipoDato.INVALIDO, TipoDato.INVALIDO, TipoDato.INVALIDO],
        [TipoDato.DECIMAL, TipoDato.DECIMAL, TipoDato.INVALIDO, TipoDato.INVALIDO, TipoDato.INVALIDO, TipoDato.INVALIDO],
        [TipoDato.INVALIDO, TipoDato.INVALIDO, TipoDato.INVALIDO, TipoDato.INVALIDO, TipoDato.INVALIDO, TipoDato.INVALIDO],
        [TipoDato.INVALIDO, TipoDato.INVALIDO, TipoDato.INVALIDO, TipoDato.INVALIDO, TipoDato.INVALIDO, TipoDato.INVALIDO]
    ] as const;

    private matrizModulo = [
        [TipoDato.DECIMAL, TipoDato.DECIMAL, TipoDato.INVALIDO, TipoDato.INVALIDO, TipoDato.INVALIDO, TipoDato.INVALIDO],
        [TipoDato.DECIMAL, TipoDato.DECIMAL, TipoDato.INVALIDO, TipoDato.INVALIDO, TipoDato.INVALIDO, TipoDato.INVALIDO],
        [TipoDato.INVALIDO, TipoDato.INVALIDO, TipoDato.INVALIDO, TipoDato.INVALIDO, TipoDato.INVALIDO, TipoDato.INVALIDO],
        [TipoDato.INVALIDO, TipoDato.INVALIDO, TipoDato.INVALIDO, TipoDato.INVALIDO, TipoDato.INVALIDO, TipoDato.INVALIDO],
        [TipoDato.INVALIDO, TipoDato.INVALIDO, TipoDato.INVALIDO, TipoDato.INVALIDO, TipoDato.INVALIDO, TipoDato.INVALIDO],
        [TipoDato.INVALIDO, TipoDato.INVALIDO, TipoDato.INVALIDO, TipoDato.INVALIDO, TipoDato.INVALIDO, TipoDato.INVALIDO]
    ] as const;

    constructor(izquierdo:Instruccion, operador:string, derecho:Instruccion, linea:number, columna:number){
        this.izquierdo = izquierdo;
        this.derecho = derecho;
        this.operador = operador;
        this.linea = linea;
        this.columna = columna;
    }

    ejecutarInstruccion(tabla: TablaSimbolos): string {
        throw new Error("Method not implemented.");
    }

    ejecutarExpresion(tabla: TablaSimbolos): Simbolo {
        let symIzq = this.izquierdo.ejecutarExpresion(tabla);
        let symDer = this.derecho.ejecutarExpresion(tabla);
        let tipo_resultante = TipoDato.INVALIDO;
        let resultado;

        switch(this.operador){
            
            case '+':
                tipo_resultante = this.matrizSuma[symIzq.getTipoDato()][symDer.getTipoDato()];
                
                if(tipo_resultante == TipoDato.ENTERO || tipo_resultante == TipoDato.DECIMAL ){
                    resultado = Number(symIzq.getValor()) + Number(symDer.getValor());
                    return new Simbolo(tipo_resultante, resultado, this.linea, this.columna);
                }else if(tipo_resultante == TipoDato.CADENA){
                    
                    let cadIzq;
                    let cadDer;

                    if(symIzq.getTipoDato() == TipoDato.CARACTER){
                        cadIzq = String.fromCharCode(Number(symIzq.getValor())); 
                    }else{
                        cadIzq = symIzq.getValor().toString();
                    }

                    if(symDer.getTipoDato() == TipoDato.CARACTER){
                        cadDer = String.fromCharCode(Number(symDer.getValor())); 
                    }else{
                        cadDer = symDer.getValor().toString();
                    }

                    resultado = cadIzq.concat(cadDer);
                    return new Simbolo(tipo_resultante, resultado, this.linea, this.columna);
                }else{
                    //invalido, error semantico, no se puede sumar estos tipos de datos
                    console.log("semantico + ");
                    break;
                }

            case '-':
                tipo_resultante = this.matrizResta[symIzq.getTipoDato()][symDer.getTipoDato()];
                if(tipo_resultante == TipoDato.ENTERO || tipo_resultante == TipoDato.DECIMAL ){
                    resultado = Number(symIzq.getValor()) - Number(symDer.getValor());
                    return new Simbolo(tipo_resultante, resultado, this.linea, this.columna);
                }else{
                    //invalido, error semantico, no se puede sumar estos tipos de datos
                    console.log("semantico - ");
                    break;
                }

            case 'u':
                if(symDer.getTipoDato() == TipoDato.ENTERO || symDer.getTipoDato() == TipoDato.DECIMAL){
                    resultado = Number(symDer.getValor()) * (-1);
                    return new Simbolo(symDer.getTipoDato(), resultado, this.linea, this.columna);
                }else{
                    //invalido, error semantico, no se puede sumar estos tipos de datos
                    console.log("semantico u ");
                    break;
                }

            case '*':
                tipo_resultante = this.matrizMultiplicacion[symIzq.getTipoDato()][symDer.getTipoDato()];
                if(tipo_resultante == TipoDato.ENTERO || tipo_resultante == TipoDato.DECIMAL ){
                    resultado = Number(symIzq.getValor()) * Number(symDer.getValor());
                    return new Simbolo(tipo_resultante, resultado, this.linea, this.columna);
                }else{
                    //invalido, error semantico, no se puede sumar estos tipos de datos
                    console.log("semantico * ");
                    break;
                }

            case '/':
                tipo_resultante = this.matrizDivision[symIzq.getTipoDato()][symDer.getTipoDato()];
                if(tipo_resultante == TipoDato.DECIMAL ){
                    resultado = Number(symIzq.getValor()) / Number(symDer.getValor());
                    return new Simbolo(tipo_resultante, resultado, this.linea, this.columna);
                }else{
                    //invalido, error semantico, no se puede sumar estos tipos de datos
                    console.log("semantico / ");
                    break;
                }
            case '%':
                tipo_resultante = this.matrizDivision[symIzq.getTipoDato()][symDer.getTipoDato()];
                if(tipo_resultante == TipoDato.DECIMAL ){
                    resultado = Number(symIzq.getValor()) % Number(symDer.getValor());
                    return new Simbolo(tipo_resultante, resultado, this.linea, this.columna);
                }else{
                    //invalido, error semantico, no se puede sumar estos tipos de datos
                    console.log("semantico % ");
                    break;
                }
            default:
                //return error semantico;
                console.log("semantico no se reconoce la operacion ");
        }
        
        return new Simbolo(tipo_resultante, "Invalido", this.linea, this.columna);
    }

    dibujarAST(nodoPadre: number): string {
        throw new Error("Method not implemented.");
    }

}