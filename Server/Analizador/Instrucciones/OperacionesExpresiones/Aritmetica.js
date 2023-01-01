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
        switch (this.operador) {
            case '+':
                var tipo_resultante = this.matrizSuma[symIzq.getTipoDato()][symDer.getTipoDato()];
                if (tipo_resultante == TipoDato_1.TipoDato.ENTERO || tipo_resultante == TipoDato_1.TipoDato.DECIMAL) {
                    var resultado = Number(symIzq.getValor()) + Number(symDer.getValor());
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
                    var resultado = cadIzq.concat(cadDer);
                    return new Simbolo_1["default"](tipo_resultante, resultado, this.linea, this.columna);
                }
                else {
                    //invalido, error semantico, no se puede sumar estos tipos de datos
                }
            case '-':
                if (this.izquierdo == null) {
                    //return UnarioResta;
                }
                else {
                    //return Resta;
                }
            case "*":
            //return Multiplicacion;
            case '/':
            //return Division;
            case '%':
            //return modulo;
            default:
            //return error semantico;
        }
        throw new Error("Method not implemented.");
    };
    Aritmetica.prototype.dibujarAST = function (nodoPadre) {
        throw new Error("Method not implemented.");
    };
    return Aritmetica;
}());
exports["default"] = Aritmetica;
