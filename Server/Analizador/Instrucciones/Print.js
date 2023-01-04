"use strict";
exports.__esModule = true;
var TipoDato_1 = require("./TablaSimbolos/TipoDato");
var Print = /** @class */ (function () {
    function Print(expresion, linea, columna) {
        this.expresion = expresion;
        this.linea = linea;
        this.columna = columna;
    }
    Print.prototype.ejecutarInstruccion = function (tabla, errores) {
        var symExpresion = this.expresion.ejecutarExpresion(tabla, errores);
        var consola = "";
        if (symExpresion != null) {
            if (symExpresion.getTipoDato() != TipoDato_1.TipoDato.INVALIDO) {
                if (symExpresion.getTipoDato() == TipoDato_1.TipoDato.CARACTER) {
                    consola = "'" + String.fromCharCode(Number(symExpresion.getValor())) + "'";
                }
                else {
                    consola = symExpresion.getValor().toString();
                }
            }
        }
        return consola;
    };
    Print.prototype.ejecutarExpresion = function (tabla, errores) {
        throw new Error("Method not implemented.");
    };
    Print.prototype.dibujarAST = function (nodoPadre) {
        throw new Error("Method not implemented.");
    };
    return Print;
}());
exports["default"] = Print;
