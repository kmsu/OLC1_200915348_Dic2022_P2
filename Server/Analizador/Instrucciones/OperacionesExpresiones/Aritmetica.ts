import Errores from "../Errores";
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

    ejecutarInstruccion(tabla:TablaSimbolos, errores:Errores): string {
        throw new Error("Method not implemented.");
    }

    ejecutarExpresion(tabla:TablaSimbolos, errores:Errores): Simbolo {
        let symIzq = this.izquierdo.ejecutarExpresion(tabla, errores);
        let symDer = this.derecho.ejecutarExpresion(tabla, errores);
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
                    //console.log("invalido, error semantico, no se puede sumar estos tipos de datos en linea " + this.linea);
                    errores.putError("Semantico", this.linea, this.columna, "no se puede sumar los tipos de datos");
                    break;
                }
                
            case '-':
                tipo_resultante = this.matrizResta[symIzq.getTipoDato()][symDer.getTipoDato()];
                if(tipo_resultante == TipoDato.ENTERO || tipo_resultante == TipoDato.DECIMAL ){
                    resultado = Number(symIzq.getValor()) - Number(symDer.getValor());
                    return new Simbolo(tipo_resultante, resultado, this.linea, this.columna);
                }else{
                    //invalido, error semantico, no se puede sumar estos tipos de datos
                    //console.log("invalido, error semantico, no se puede restar estos tipos de datos en linea " + this.linea);
                    errores.putError("Semantico", this.linea, this.columna, "no se puede restar los tipos de datos");
                    break;
                }

            case 'u':
                if(symDer.getTipoDato() == TipoDato.ENTERO || symDer.getTipoDato() == TipoDato.DECIMAL){
                    resultado = Number(symDer.getValor()) * (-1);
                    return new Simbolo(symDer.getTipoDato(), resultado, this.linea, this.columna);
                }else{
                    //invalido, error semantico, no se puede sumar estos tipos de datos
                    //console.log("invalido, error semantico, Error unario resta en linea " + this.linea);
                    errores.putError("Semantico", this.linea, this.columna, "no se puede operar el unario");
                    break;
                }

            case '*':
                tipo_resultante = this.matrizMultiplicacion[symIzq.getTipoDato()][symDer.getTipoDato()];
                if(tipo_resultante == TipoDato.ENTERO || tipo_resultante == TipoDato.DECIMAL ){
                    resultado = Number(symIzq.getValor()) * Number(symDer.getValor());
                    return new Simbolo(tipo_resultante, resultado, this.linea, this.columna);
                }else{
                    //invalido, error semantico, no se puede sumar estos tipos de datos
                    //console.log("invalido, error semantico, no se puede multiplicar estos tipos de datos en linea " + this.linea);
                    errores.putError("Semantico", this.linea, this.columna, "no se puede multiplicar los tipos de datos");
                    break;
                }

            case '/':
                tipo_resultante = this.matrizDivision[symIzq.getTipoDato()][symDer.getTipoDato()];
                if(tipo_resultante == TipoDato.DECIMAL ){
                    /*let aux = Number(symIzq.getValor()) % Number(symDer.getValor());
                    if(aux == 0){
                        tipo_resultante = TipoDato.ENTERO;
                    }*/
                    resultado = Number(symIzq.getValor()) / Number(symDer.getValor());
                    return new Simbolo(tipo_resultante, resultado, this.linea, this.columna);
                }else{
                    //invalido, error semantico, no se puede sumar estos tipos de datos
                    //console.log("invalido, error semantico, no se puede dividir estos tipos de datos en linea " + this.linea);
                    errores.putError("Semantico", this.linea, this.columna, "no se puede dividir los tipos de datos");
                    break;
                }
                
            case '%':
                tipo_resultante = this.matrizDivision[symIzq.getTipoDato()][symDer.getTipoDato()];
                if(tipo_resultante == TipoDato.DECIMAL ){
                    resultado = Number(symIzq.getValor()) % Number(symDer.getValor());
                    return new Simbolo(tipo_resultante, resultado, this.linea, this.columna);
                }else{
                    //invalido, error semantico, no se puede sumar estos tipos de datos
                    //console.log("invalido, error semantico, no se puede operar modulo entre estos tipos de datos en linea " + this.linea);
                    errores.putError("Semantico", this.linea, this.columna, "no se puede operar modulo los tipos de datos");
                    break;
                }
            default:
                //return error semantico;
                //console.log("semantico no se reconoce la operacion en linea " + this.linea);
                errores.putError("Semantico", this.linea, this.columna, "no se reconoce la operacion");
        }
        
        return new Simbolo(tipo_resultante, "Invalido", this.linea, this.columna);
    }

    dibujarAST(nodoPadre: number): string {
        throw new Error("Method not implemented.");
    }

}