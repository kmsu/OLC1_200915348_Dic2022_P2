"use strict";
exports.__esModule = true;
var Simbolo_1 = require("../TablaSimbolos/Simbolo");
var TipoDato_1 = require("../TablaSimbolos/TipoDato");
var Aritmetica = /** @class */ (function () {
    function Aritmetica(izquierdo, operador, derecho, linea, columna) {
        //Arreglo constante, no debe cambiar sus valores en ningun momento. Tomar en cuenta una fila y una columna de tipo invalido
        this.matrizSuma = [
            [TipoDato_1.TipoDato.ENTERO, TipoDato_1.TipoDato.DECIMAL, TipoDato_1.TipoDato.ENTERO, TipoDato_1.TipoDato.ENTERO, TipoDato_1.TipoDato.CADENA, TipoDato_1.TipoDato.INVALIDO],
            [TipoDato_1.TipoDato.DECIMAL, TipoDato_1.TipoDato.DECIMAL, TipoDato_1.TipoDato.DECIMAL, TipoDato_1.TipoDato.DECIMAL, TipoDato_1.TipoDato.CADENA, TipoDato_1.TipoDato.INVALIDO],
            [TipoDato_1.TipoDato.ENTERO, TipoDato_1.TipoDato.DECIMAL, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.CADENA, TipoDato_1.TipoDato.INVALIDO],
            [TipoDato_1.TipoDato.ENTERO, TipoDato_1.TipoDato.DECIMAL, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.CADENA, TipoDato_1.TipoDato.CADENA, TipoDato_1.TipoDato.INVALIDO],
            [TipoDato_1.TipoDato.CADENA, TipoDato_1.TipoDato.CADENA, TipoDato_1.TipoDato.CADENA, TipoDato_1.TipoDato.CADENA, TipoDato_1.TipoDato.CADENA, TipoDato_1.TipoDato.INVALIDO],
            [TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO]
        ];
        this.matrizResta = [
            [TipoDato_1.TipoDato.ENTERO, TipoDato_1.TipoDato.DECIMAL, TipoDato_1.TipoDato.ENTERO, TipoDato_1.TipoDato.ENTERO, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO],
            [TipoDato_1.TipoDato.DECIMAL, TipoDato_1.TipoDato.DECIMAL, TipoDato_1.TipoDato.DECIMAL, TipoDato_1.TipoDato.DECIMAL, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO],
            [TipoDato_1.TipoDato.ENTERO, TipoDato_1.TipoDato.DECIMAL, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO],
            [TipoDato_1.TipoDato.ENTERO, TipoDato_1.TipoDato.DECIMAL, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO],
            [TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO],
            [TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO]
        ];
        this.matrizMultiplicacion = [
            [TipoDato_1.TipoDato.ENTERO, TipoDato_1.TipoDato.DECIMAL, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.ENTERO, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO],
            [TipoDato_1.TipoDato.DECIMAL, TipoDato_1.TipoDato.DECIMAL, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.DECIMAL, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO],
            [TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO],
            [TipoDato_1.TipoDato.ENTERO, TipoDato_1.TipoDato.DECIMAL, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO],
            [TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO],
            [TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO]
        ];
        this.matrizDivision = [
            [TipoDato_1.TipoDato.DECIMAL, TipoDato_1.TipoDato.DECIMAL, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.DECIMAL, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO],
            [TipoDato_1.TipoDato.DECIMAL, TipoDato_1.TipoDato.DECIMAL, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.DECIMAL, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO],
            [TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO],
            [TipoDato_1.TipoDato.DECIMAL, TipoDato_1.TipoDato.DECIMAL, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO],
            [TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO],
            [TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO]
        ];
        this.matrizModulo = [
            [TipoDato_1.TipoDato.DECIMAL, TipoDato_1.TipoDato.DECIMAL, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO],
            [TipoDato_1.TipoDato.DECIMAL, TipoDato_1.TipoDato.DECIMAL, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO],
            [TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO],
            [TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO],
            [TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO],
            [TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO, TipoDato_1.TipoDato.INVALIDO]
        ];
        this.izquierdo = izquierdo;
        this.derecho = derecho;
        this.operador = operador;
        this.linea = linea;
        this.columna = columna;
    }
    Aritmetica.prototype.ejecutarInstruccion = function (tabla) {
        throw new Error("Method not implemented.");
    };
    Aritmetica.prototype.ejecutarExpresion = function (tabla) {
        var symIzq = this.izquierdo.ejecutarExpresion(tabla);
        var symDer = this.derecho.ejecutarExpresion(tabla);
        var tipo_resultante = TipoDato_1.TipoDato.INVALIDO;
        var resultado;
        switch (this.operador) {
            case '+':
                tipo_resultante = this.matrizSuma[symIzq.getTipoDato()][symDer.getTipoDato()];
                if (tipo_resultante == TipoDato_1.TipoDato.ENTERO || tipo_resultante == TipoDato_1.TipoDato.DECIMAL) {
                    resultado = Number(symIzq.getValor()) + Number(symDer.getValor());
                    return new Simbolo_1["default"](tipo_resultante, resultado, this.linea, this.columna);
                }
                else if (tipo_resultante == TipoDato_1.TipoDato.CADENA) {
                    var cadIzq = void 0;
                    var cadDer = void 0;
                    if (symIzq.getTipoDato() == TipoDato_1.TipoDato.CARACTER) {
                        cadIzq = String.fromCharCode(Number(symIzq.getValor()));
                    }
                    else {
                        cadIzq = symIzq.getValor().toString();
                    }
                    if (symDer.getTipoDato() == TipoDato_1.TipoDato.CARACTER) {
                        cadDer = String.fromCharCode(Number(symDer.getValor()));
                    }
                    else {
                        cadDer = symDer.getValor().toString();
                    }
                    resultado = cadIzq.concat(cadDer);
                    return new Simbolo_1["default"](tipo_resultante, resultado, this.linea, this.columna);
                }
                else {
                    //invalido, error semantico, no se puede sumar estos tipos de datos
                    console.log("semantico + ");
                    break;
                }
            case '-':
                tipo_resultante = this.matrizResta[symIzq.getTipoDato()][symDer.getTipoDato()];
                if (tipo_resultante == TipoDato_1.TipoDato.ENTERO || tipo_resultante == TipoDato_1.TipoDato.DECIMAL) {
                    resultado = Number(symIzq.getValor()) - Number(symDer.getValor());
                    return new Simbolo_1["default"](tipo_resultante, resultado, this.linea, this.columna);
                }
                else {
                    //invalido, error semantico, no se puede sumar estos tipos de datos
                    console.log("semantico - ");
                    break;
                }
            case 'u':
                if (symDer.getTipoDato() == TipoDato_1.TipoDato.ENTERO || symDer.getTipoDato() == TipoDato_1.TipoDato.DECIMAL) {
                    resultado = Number(symDer.getValor()) * (-1);
                    return new Simbolo_1["default"](symDer.getTipoDato(), resultado, this.linea, this.columna);
                }
                else {
                    //invalido, error semantico, no se puede sumar estos tipos de datos
                    console.log("semantico u ");
                    break;
                }
            case '*':
                tipo_resultante = this.matrizMultiplicacion[symIzq.getTipoDato()][symDer.getTipoDato()];
                if (tipo_resultante == TipoDato_1.TipoDato.ENTERO || tipo_resultante == TipoDato_1.TipoDato.DECIMAL) {
                    resultado = Number(symIzq.getValor()) * Number(symDer.getValor());
                    return new Simbolo_1["default"](tipo_resultante, resultado, this.linea, this.columna);
                }
                else {
                    //invalido, error semantico, no se puede sumar estos tipos de datos
                    console.log("semantico * ");
                    break;
                }
            case '/':
                tipo_resultante = this.matrizDivision[symIzq.getTipoDato()][symDer.getTipoDato()];
                if (tipo_resultante == TipoDato_1.TipoDato.DECIMAL) {
                    resultado = Number(symIzq.getValor()) / Number(symDer.getValor());
                    return new Simbolo_1["default"](tipo_resultante, resultado, this.linea, this.columna);
                }
                else {
                    //invalido, error semantico, no se puede sumar estos tipos de datos
                    console.log("semantico / ");
                    break;
                }
            case '%':
                tipo_resultante = this.matrizDivision[symIzq.getTipoDato()][symDer.getTipoDato()];
                if (tipo_resultante == TipoDato_1.TipoDato.DECIMAL) {
                    resultado = Number(symIzq.getValor()) % Number(symDer.getValor());
                    return new Simbolo_1["default"](tipo_resultante, resultado, this.linea, this.columna);
                }
                else {
                    //invalido, error semantico, no se puede sumar estos tipos de datos
                    console.log("semantico % ");
                    break;
                }
            default:
                //return error semantico;
                console.log("semantico no se reconoce la operacion ");
        }
        return new Simbolo_1["default"](tipo_resultante, "Invalido", this.linea, this.columna);
    };
    Aritmetica.prototype.dibujarAST = function (nodoPadre) {
        throw new Error("Method not implemented.");
    };
    return Aritmetica;
}());
exports["default"] = Aritmetica;
